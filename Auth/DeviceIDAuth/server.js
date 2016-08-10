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

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/deviceSignup', (req, res) => {
   const deviceId = req.body.deviceID;
   const name = req.body.name;
   const id = req.body.id;
   User.registUser(id, name, deviceId, (err, result) => {
      if (err ) {
         res.status(400).send({msg:'사용자 등록 실패'});
         return;
      }
      res.send({msg:'success'});
   });
});


app.post('/deviceLogin', (req, res) => {
   const deviceID = req.body.deviceID;
   User.findUserByDeviceID(deviceID, (err, user) => {
      if ( err ) {
         res.status(500).send({msg:'User Model Error'});
         return;
      }

      if ( ! user ) {
         res.status(401).send({msg:'등록된 사용자 아님'});;
         return;
      }

      req.session.user = user;

      res.send({msg:'로그인 성공'});
   });
});

app.delete('/logout', (req, res) => {
   req.session.destroy( err => {
      if ( err ) {
         res.status(400).send(err);
         return;
      }
      res.send({msg:'Logout Success'});
   });
});


app.use(require('./articles.js'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});
