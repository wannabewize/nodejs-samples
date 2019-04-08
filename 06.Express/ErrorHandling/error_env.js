/**
 * 동작 환경
 */

// $ NODE_ENV=development node env
const express = require('express');
const app = express();
app.listen(3000);

console.log('env : ', app.get('env'));

app.use( (req, res, next) => {
   var err = new Error('Error Message');
   err.code = 500;
   next(err);
});

app.use( (err, req, res, next) => {
   // 상황 별 에러 메세지 처리
   if (app.get('env') === 'development') {
      res.send(err.stack);
   }
   else {
      console.log('code : ', err.code);
      res.status(200).sendFile(__dirname + '/user_friendly_error.html');
   }
});