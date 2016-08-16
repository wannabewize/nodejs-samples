const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var FCM = require('fcm-push');
const apiKey = 'API-KEY';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var devices = [];

app.post('/regist', (req, res) => {
   const token = req.body.token;
   const deviceId = req.body.deviceId;

   console.log('token : ', token, ' deviceId : ', deviceId);

   if ( ! ( token || deviceId) ) {
      res.status(400).send({msg:'token, deviceId 오류'});
      return;
   }

   devices.push({token:token, deviceId:deviceId});
   console.log(devices);
   res.send({msg:'success'});
});

// 기기 목록
app.get('/devices', (req, res) => {
   res.send({count : devices.length, data : devices});
});

// 알림 발송
app.post('/sendNoti', (req, res) => {
   var tokens = req.body.tokens;
   var msg = req.body.msg;

   console.log('tokens : ', tokens, ' msg : ', msg);
   if ( ! ( tokens || msg ) ) {
      res.status(400).send({msg:'tokens, msg Not found'});
      return;
   }

   const message = {
      registration_ids : tokens,
      notification : {
         title : 'FCM 알림',
         text : msg,
         icon : 'ic_football'
      }
   };

   const fcm = new FCM(apiKey);

   fcm.send(message, (err, results) => {
      if (err) {
         console.error('Error : ', err);
         res.status(500).send({msg:err.message});
         return;
      }

      res.send({msg:'Success'});
   });
});

app.get('/', (req, res) => {
   res.sendFile('public/index.html');
});

app.listen(3000);