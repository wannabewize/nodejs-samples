const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const sharedSession = require('express-socket.io-session');
const http = require('http');

const User = require('./user.js');
const ioServer = require('./ioServer.js');

const app = express();
const server = http.createServer(app);

ioServer.attach(server);
server.listen(3000);

// 로그 남기기
app.use(require('morgan')('dev'));

app.use(bodyParser.json());

// 이미지 요청
app.use(express.static('public'));

// 세션
const expressSession = session({
   secret : 'SECRET-KEY',
   resave : true,
   saveUninitialized : true
});
app.use(expressSession);
// 세션을 Socket.io에서 사용
ioServer.use(sharedSession(expressSession, {autosave:true}));

app.get('/favicon.ico', (req, res) => {});

app.use(express.static('./public'));

app.get('/', (req, res) => {
   res.sendfile(__dirname + '/public/index.html');
});


app.post('/login', (req, res) => {
   const id = req.body.id;
   const pw = req.body.pw;

   const user = User.findUser(id);
   if ( user != null && user.pw == pw ) {
      req.session.user = {name : user.name, id : user.id };
      return res.send({name:user.name});
   }

   res.sendStatus(401);
});

app.delete('/logout', (req, res) => {
   req.session.destroy();
   res.sendStatus(200);
});


