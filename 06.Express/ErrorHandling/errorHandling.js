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
   next('Error2 발생');
});

// 에러가 발생하지 않는 상황
app.get('/normal', (req, res, next) => {
   res.send('Error Handling Example');
});

// 에러 처리
app.use( (err, req, res, next) => {
   res.status(500).send({msg:err});
});

app.listen(3000);
