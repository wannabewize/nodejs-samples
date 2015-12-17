/**
 * 미들웨어가 동작하는 원리
 */

var express = require('express');
var app = express();

// 요청 정보 분석용 미들웨어
app.use(function(req, res, next) {
   // 분석 결과를 요청 객체에 설정
   req.processedData = 'Middleware data';
   // 이어지는 미들웨어 실행   
   next();
});

// 요청 처리용 미들웨어
app.use(function(req, res) {
   // 미들웨어에서 분석한 데이터
   var data = req.processedData;
   res.status(200).send('Express : ' + data);
});


app.listen(3000);