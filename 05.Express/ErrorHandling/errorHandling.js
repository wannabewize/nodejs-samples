/**
 * 에러 담당 미들웨어 예제
 */

const express = require('express');
const app = express();

// 문자열로 에러 전달
app.get('/error1', (req, res, next) => {
   const errorMessage = 'Error 발생';
   next(errorMessage);
});

// 에러 객체로 에러 전달 - 상세 에러 처리 가능
app.get('/error2', (req, res, next) => {
   const error = new Error('에러 메세지');
   error.code = 400;
   next(error);
});

// 에러가 발생하지 않는 상황
app.get('/', (req, res, next) => {
   res.send('Error Handling Example');
});

// 에러 처리
app.use( (err, req, res, next) => {
   const code = err.code;
   const msg = err.message;
   
   if ( code && msg ) {
      res.status(code).send({code:code, message:msg});
   }
   else {
      res.sendStatus(500);
   }
});

app.listen(3000);
