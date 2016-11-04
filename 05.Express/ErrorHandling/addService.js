/**
 * 두 값을 더하는 서비스. 입력값 검사를 한다.
 */
const express = require('express');
const app = express();

app.use('/add', add);
app.use('/admin', showAdmin);

app.use(errorHandler);
app.listen(3000);

// add?value1=1&value2=2
function add(req, res, next) {
   const v1 = req.query['value1'];
   const v2 = req.query['value2'];
   
   // 입력 파라미터 체크
   if ( v1 == null || v1.length == 0 || v2 == null || v2.length == 0 ) {
      const error = new Error('value1, value2 입력이 없습니다.');
      error.code = 400;
      return next(error);
   }
   
   const num1 = parseInt(v1);
   const num2 = parseInt(v2);
   
   // 숫자 체크
   if ( isNaN(num1) || isNaN(num2) ) {
      const error = new Error('value1, value2는 숫자만 입력');
      error.code = 400;
      return next(error);
   }
   
   var result = num1 + num2;
   res.send('Result : ' + result);
}

// 401 에러
function showAdmin(req, res, next) {
   var error = new Error('권한 없음');
   error.code = 401;
   return next(error);
}

function errorHandler(err, req, res, next) {
   // JSON 에러 메세지
   var msg = {
      code:err.code,
      message:err.message
   }
   console.log(msg);
   // 상태코드
   res.status(err.code).json(msg);
}
