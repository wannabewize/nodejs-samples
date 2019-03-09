/**
 * 동작 환경
 */

// $ NODE_ENV=development node env
const express = require('express');
const app = express();
app.listen(3000);

console.log('env : ', app.get('env'));

app.use(function (req, res, next) {
   var err = new Error('Error Message');
   err.code = 500;
   next(err);
});

app.use(function (err, req, res, next) {
   // 상황 별 에러 메세지 처리
   if (app.get('env') === 'development') {
      res.end(err.stack);
      console.error(err.stack);
   }
   else {
      console.log('code : ', err.code);
      console.log('잠시 후 다시 시도해주세요');
      res.status(200).end('잠시 후 다시 시도해주세요');
   }
});