var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();
var sessionStoreOptions = {
   url: 'mongodb://localhost:27017/session',
   ttl : 3 * 1000,   // 세션 유효기간 3초
   autoRemoveInterval : 1 // 1분
};
app.use(session({
   secret: 'Secret Key',
   resave: false,
   saveUninitialized: false,
   store: new MongoStore(sessionStoreOptions)
}));

// 파비콘 무시
app.use('/favicon.ico', function () {
});

app.use(function (req, res) {
   console.log('req.session', req.session);
   // 세션 ID
   var sessionID = req.sessionID;
   console.log('session id :', sessionID);

   // 방문 횟수
   console.log('sessionVisit : ', req.session.sessionVisit);
   if (req.session.sessionVisit)
      req.session.sessionVisit = parseInt(req.session.sessionVisit) + 1;
   else
      req.session.sessionVisit = 1;

   // 마지막 방문 날짜
   var now = new Date();
   var last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
   req.session.sessionLast = last;

   // 첫 방문 날짜
   if (!req.session.sessionSince) {
      req.session.sessionSince = last;
   }

   res.send({
      sessionVisit: req.session.sessionVisit,
      sessionSince: req.session.sessionSince,
      sessionLast: req.session.sessionLast
   });
});

app.listen(3000);
