var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var gcm = require('node-gcm');

// Server API Key
var sender = new gcm.Sender('SERVER-API-KEY');       

var devices = [];

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/devices', showDeviceList);
app.post('/register', registerDevice);
app.post('/sendMessage', sendMessage);

app.listen(3000);

// 기기 정보 목록 출력
function showDeviceList(req, res) {
   res.render('deviceList', {devices:devices})
}

function registerDevice(req, res) {
   var deviceID = req.body.deviceID;
   var os = req.body.os;
   var token = req.body.token;
   
   // 기존에 등록된 내용이 있으면 수정
   var device = getDeviceInfo(deviceID);
   if ( device ) {
      device.token = token;      
   }
   // 새로운 기기 정보 등록
   else {
      var info = {
         deviceID : deviceID,
         token : token,
         os : os
      };
      devices.push(info);
   }   
   
   res.sendStatus(200);   
}

// DeviceID에서 기기 정보 찾기
function getDeviceInfo(deviceID) {
   for(var i = 0 ; i < devices.length ; i++) {
      var item = devices[i];
      if ( item.deviceID == deviceID ) {
         return item;
      }
   }
   return null;
}

// 메세지 보내기
function sendMessage(req, res) {
   var deviceIDList = req.body.deviceID;
   var message = req.body.message;
   console.log('devcie list : ', deviceIDList, 'Array : ', Array.isArray(deviceIDList));
   console.log('message : ', message);
   
   if (! deviceIDList || ! message ) {
      res.sendStatus(400);
      return;
   }   
   
   // 클라이언트가 전송한 DeviceID에서 Registration ID 찾기
   var regIDList = [];         
   if ( Array.isArray(deviceIDList)) {
      for(var i = 0 ; i < deviceIDList.length ; i++) {
         var deviceID = deviceIDList[i];
         var device = getDeviceInfo(deviceID);
         if ( device )
            regIDList.push(device.token);
         else
            console.error('RegID 못찾음 : ', deviceID);
      }
   }
   else {
      var device = getDeviceInfo(deviceIDList);
      if ( device )
         regIDList.push(device.token);
      else
         console.error('RegID 못찾음 : ', deviceID);
   }
   
   console.log('regIds : ', regIDList);

   // GCM용 메세지 객체 생성 
   var message = new gcm.Message({
      collapseKey: 'demo',
      notification:{
         title:'Noti Sample',
         body:message,
         icon:'ic_launcher'
      }      
   });
   
   // GCM 메세지 발송 요청
   sender.send(message, regIDList, function(err, result) {
      if (err) {
         console.error('Error : ' + sendError);
      }
      else {
         console.log(result);
         
         var results = result.results;
         for(var i = 0 ; i < results.length ; i++) {
            var item = results[i];
            var regID = regIDList[i];
            var sendError = item.error;
            if ( sendError ) {
               console.error(sendError, regID);
            }
            else {
               console.log('Success : ', regID);
            }
         }
      }
   });        
   
   res.redirect('/devices');
}
                   