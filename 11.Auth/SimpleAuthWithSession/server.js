const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(session({
   resave:false,
   saveUninitialized:false,
   secret:'Secret Key'})
);

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', handleLogin);
app.delete('/logout',handleLogout);
app.get('/private', sendPrivateInfo);
app.get('/public', sendPublicInfo);


app.listen(3000);

const user = {
   id : 'iu',
   password : '1234',
   name : 'IU',
   instagram : 'https://www.instagram.com/dlwlrma'
}

function handleLogin(req, res) {
   var id = req.body.id;
   var password = req.body.password;

   if ( id === user.id && password === user.password ) {
      // 로그인 성공시 : 세션에 사용자 ID 저장
      req.session.userid = id;
      res.sendStatus(200);
   }
   else {
      res.sendStatus(401);
   }
}

function handleLogout(req, res) {
   req.session.destroy( err => {
      if ( err ) {
         res.sendStatus(500);
      }
      else {
         // 로그아웃 성공
         res.sendStatus(200);
      }
   });
}

function sendPublicInfo(req, res) {
   res.send({message : 'This is Public Information'});
}

function sendPrivateInfo(req, res) {
   var id = req.session.userid;
   if ( id ) {
      res.send(user);
   }
   else {
      res.sendStatus(401);
   }
}