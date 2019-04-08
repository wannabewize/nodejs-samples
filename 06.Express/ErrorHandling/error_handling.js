/**
 * 에러 담당 미들웨어 예제
 */

const express = require('express');
const app = express();

// 미들웨어에서 에러 발생 - 전달
app.get('/error1', (req, res, next) => {
   next('Error1 발생');
});

app.get('/error2', (req, res, next) => {
   next(10032);
});

app.get('/error3', (req, res, next) => {
   next({code: 10033, msg: '에러 발생'});
});

// 에러 타입으로 다루기
app.get('/error4', (req, res, next) => {
   const error = new Error('에러 메세지');
   next(error);
});

class ValidationError extends Error {
   constructor(message, code) {
       super(message);
       this.code = code;
   }
}

app.get('/error5', (req, res, next) => {
   const error = new ValidationError('에러 메세지', 3009);
   next(error);
});

// 에러가 발생하지 않는 상황
app.get('/normal', (req, res, next) => {
   res.send('Error Handling Example');
});

// 에러 처리
app.use( (err, req, res, next) => {
   if ( err instanceof ValidationError ) {
      console.log('Validation Error');
   }
   else {
      console.log(err);
   }
   res.status(500).send({msg:err});
});

app.listen(3000);

