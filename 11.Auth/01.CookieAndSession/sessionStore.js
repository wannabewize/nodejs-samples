const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const sessionStoreOptions = {
   url: 'mongodb://localhost:27017/session'
   // ,ttl : 3   // 세션 유효기간 초 단위. 3초
   // ,autoRemove : 'interval' // 주기적으로 제거
   // ,autoRemoveInterval: 1 // 분 단위
};
app.use(session({
   secret: 'Secret Key',
   resave: false,
   saveUninitialized: false,
   store: new MongoStore(sessionStoreOptions)
}));

// 파비콘 무시
app.use('/favicon.ico', () => {
});

app.use( (req, res) => {
   console.log('req.session', req.session);
   // 세션 ID
   const sessionID = req.sessionID;
   console.log('session id :', sessionID);

   // 방문 횟수
   console.log('sessionVisit : ', req.session.sessionVisit);
   if (req.session.sessionVisit)
      req.session.sessionVisit = parseInt(req.session.sessionVisit) + 1;
   else // 방문한 적이 없으면 1로 초기화
      req.session.sessionVisit = 1;

   // 마지막 방문 날짜
   const now = new Date();
   const last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
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
