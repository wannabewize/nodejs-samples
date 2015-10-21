/*
 * 계정 활성화 메일 발송과 활성화 예제
 * 
 * 메일 보내기 요청
 *   GET SERVER/send?mail=wannabewize@gmail.com
 * 
 * 활성화 요청
 *   GET SERVER/activate?mail=wannabewize@gmail.com&code=1234567890
 */

var nodemailer = require('nodemailer');
var express = require('express');
// 임의의 난수 문자열 만들기
var randomstring = require('randomstring');
var app = express();

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user : 'tacademy.expert@gmail.com',
        pass : 'PASSWORD'
    }
});

app.get('/activate', handleActivate);
app.get('/send', sendActivationMail);

app.listen(3000);


var activateList = {};

function sendActivationMail(req, res) {
   var mailTo = req.query.mail;
   if ( !mailTo ) {
      res.sendStatus(400);
      return;      
   }
   
   var randomStr = randomstring.generate(10); // 10자리 랜덤
   activateList[mailTo] = {mail:mailTo, code:randomStr, activate:false};
   
	var activeLink = 'http://localhost:3000/activate?mail=' + mailTo + '&code=' + randomStr;	
	console.log('active link : ', activeLink);
   
   var mailOption = {
      from : 'tacademy.expert@gmail.com',
      to : mailTo,
      subject : 'Activate Account',      
      text : '계정을 활성화 하려면 다음 링크를 누르세요',
      html : '<a href="' + activeLink + '">active</a>'
   };
   
   transporter.sendMail(mailOption, function(err, info) {
      if ( err ) {
         console.error('Send Mail error : ', err);
         res.sendStatus(500);
      }
      else {
         console.log('Message sent : ', info);
         res.status(200).send('Activation mail sent to ' + mailTo);
      }
   });   
}


function handleActivate(req, res) {
   var mail = req.query.mail;
   var code = req.query.code;
   
   // 이메일로 활성화 요청 기록 찾기
   var activateRecord = activateList[mail];
   if ( !activateRecord ) {
      // 기록에 없으면 - 잘못된 요청
      res.sendStatu(400);
      return;
   }
   
   if ( activateRecord.code == code ) {      
      activateRecord['activate'] = true;
      res.status(200).send('계정 활성화 성공');
   }
   else {
      res.status(400).send('계정 활성화 코드 오류');
   }
}





	