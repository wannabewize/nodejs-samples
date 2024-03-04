/**
 * 미들웨어가 동작하는 원리
 */
const express = require('express');
const app = express();

// 로그 남기기
app.use( (req, res, next) => {
   console.log('첫 번째 미들웨어 시작');
   var now = new Date();
   console.log('현재 시각 : ', now.toDateString());
   console.log('첫 번째 미들웨어 종료');   

   // 다음 미들웨어 실행
   next();
});

// 요청 정보 분석 - 다음 미들웨어에게 제공
app.use( (req, res, next) => {
   console.log('두 번째 미들웨어 시작');

   // 분석 결과를 요청 객체에 설정 - 다음 미들웨어에게 전달
   const random = Math.round(Math.random() * 100);
   req.data = '' + random;

   console.log('두 번째 미들웨어 종료');
   // 이어지는 미들웨어 실행   
   next();
});

// 요청 처리용 미들웨어
app.use( (req, res) => {
   console.log('세 번째 미들웨어 시작');

   // 이전 미들웨어가 전달한 데이터
   const data = req.data;

   res.send('Random :' + data);
   console.log('세 번째 미들웨어 종료');
});

app.listen(3000);