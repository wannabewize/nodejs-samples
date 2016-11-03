const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// 쿠키 파서 - req.cookies 사용 가능
app.use(cookieParser());

app.use(express.static('./bower_components'));

// 파비콘 무시
app.use('/favicon.ico', () => {});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/visit', (req, res) => {
   // 방문 횟수를 저장하기 위한 visit 쿠키
   var visit = req.cookies.visit;
   if ( ! visit ) {
      visit = 0;
   }
   else {
      visit = parseInt(visit) + 1;
   }

   res.cookie('visit',visit);

   // 최종 방문 날짜를 기록하는 last 쿠키
   var now = new Date();
   //YYYY.MM.DD
   var last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
   res.cookie('last',last);

   // 최초 방문 날짜를 기록하는 since 쿠키
   var since = req.cookies.since;
   if (! since ) {
      since = last;
   }
   res.cookie('since',since);
   res.send({visit:visit, last:last, since:since});
});

app.get('/initCookie', (req, res) => {
   // 쿠키 경로
   res.cookie('path', 'PATH-VALUE', {path:'/path'});
   res.cookie('subpath', 'PATH/SUB-VALUE', {path:'/path/sub'});

   // 쿠키 Life Time
   res.cookie('age1000', 'MAXAGE-1000', {maxAge:1000}); // 1초
   res.cookie('age10000', 'MAXAGE-10000', {maxAge:1000*10}); // 10초

   res.sendStatus(200);
});

// MaxAge
app.get('/maxage', (req, res) => {
   const age1000 = req.cookies.age1000;
   const age10000 = req.cookies.age10000;
   res.send({age1000:age1000, age10000:age10000});
});

app.get('/path', (req, res) => {
   const path = req.cookies.path;
   const subpath = req.cookies.subpath;

   res.send({path:path, subpath:subpath});
});

app.get('/path/sub', (req, res) => {
   const path = req.cookies.path;
   const subpath = req.cookies.subpath;

   res.send({path:path, subpath:subpath});
});

app.get('/session', (req, res) => {
   console.log('req.session', req.session);
   // 세션 ID
   const sessionID = req.sessionID;
   console.log('session id :', sessionID);

   // 방문 횟수
   console.log('visit : ', req.session.visit);
   if ( req.session.visit )
      req.session.visit = parseInt(req.session.visit) + 1;
   else
      req.session.visit = 1;

   // 마지막 방문 날짜
   const now = new Date();
   const last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
   req.session.last = last;

   // 첫 방문 날짜
   if (! req.session.since ) {
      req.session.since = last;
   }

   res.send({visit:req.session.visit, since:req.session.since, last:req.session.last});
});

app.listen(3000);


