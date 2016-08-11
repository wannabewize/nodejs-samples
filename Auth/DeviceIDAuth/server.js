const express = require('express');
const bodyParser = require('body-parser');
const User = require('./user.js');
const session = require('express-session');

const app = express();
app.listen(3000);

// 세션 설정 - TODO : SessionStore 사용
app.use(session({
   secret:'SECRET-KEY',
   resave : false,
   saveUninitialized : false
}));

app.get('/favicon', (req,res) => { res.send();});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});

// 사용자 등록
app.post('/deviceSignup', (req, res) => {
   const deviceId = req.body.deviceID;
   const name = req.body.name;
   const id = req.body.id;
   // 사용자 등록
   User.registUser(id, name, deviceId, (err, result) => {
      if (err) {
         res.status(400).send({msg:'사용자 등록 실패'});
         return;
      }
      res.send({msg:'success'});
   });
});

// Device ID로 로그인
app.post('/deviceLogin', (req, res) => {
   const deviceID = req.body.deviceID;
   // 사용자 찾기
   User.findUserByDeviceID(deviceID, (err, user) => {
      if ( err ) {
         res.status(500).send({msg:'User Model Error'});
         return;
      }

      // 사용자가 없는 경우 401 응답
      if ( ! user ) {
         res.status(401).send({msg:'등록된 사용자 아님'});;
         return;
      }

      // 사용자 로그인 성공 - 세션에 사용자 정보 기록
      req.session.user = user;

      // 로그인 요청 응답
      res.send({msg: user.name + ' 로그인 성공'});
   });
});

// 로그아웃
app.delete('/logout', (req, res) => {
   // 세션 삭제
   req.session.destroy( err => {
      if ( err ) {
         res.status(400).send(err);
         return;
      }
      res.send({msg:'Logout Success'});
   });
});


/**
 * 글 읽기/쓰기 - 읽기는 모든 사용자 가능. 글 쓰기는 인증된 사용자만
 */

// 글 목록
// TODO : 데이터베이스 사용
var articles = [];

// 글 읽기
app.get('/articles', (req, res) => {
   res.send({count:articles.length, data:articles});
});

// 글 쓰기
app.post('/articles', (req, res) => {
   // 세션에서 사용자 정보 읽기
   const user = req.session.user;
   // console.log('user from session : ',user);

   // 세션에 사용자 정보가 없으면 -> 인증된 상태가 아니다.
   if ( ! user ) {
      res.status(401).send({msg:'로그인 필요'});
      return;
   }

   // 메세지 바디에서 사용자가 작성한 글 얻기
   const text = req.body.text;
   if ( ! text ) {
      res.status(400).send({msg:'글 내용(text) 입력 오류'});
      return;
   }

   // 데이터베이스에 사용자 정보와 글 등록
   articles.push({id:user.id, name:user.name, text:text});

   // 응답 메세지
   res.send({msg:'success'});
});
