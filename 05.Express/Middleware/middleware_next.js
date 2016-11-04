/**
 * 미들웨어가 동작하는 원리
 */
const express = require('express');
const app = express();

// 로그 남기기
app.use(function(req, res, next) {
   var now = new Date();
   console.log(now.toDateString());
   // 다음 미들웨어 실행
   next();
});

// 요청 정보 분석 - 다음 미들웨어에게 제공
app.use(function(req, res, next) {
   // 분석 결과를 요청 객체에 설정
   const random = Math.round(Math.random() * 100);
   req.data = 'Random : ' + random;
   // 이어지는 미들웨어 실행   
   next();
});

// 요청 처리용 미들웨어
app.use(function(req, res) {
   // 미들웨어에서 분석한 데이터
   const data = req.data;
   res.send('Random :' + data);
});

app.listen(3000);