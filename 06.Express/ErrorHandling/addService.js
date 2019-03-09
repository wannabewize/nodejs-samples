/**
 * 두 값을 더하는 서비스. 입력값 검사를 한다.
 * add?num1=1&num2=2
 */
const express = require('express');
const app = express();

app.use('/add', add);
app.use('/admin', showAdmin);

app.use(errorHandler);
app.listen(3000);

function add(req, res, next) {
   const v1 = req.query.num1;
   const v2 = req.query.num2;
   
   // 입력 파라미터 체크
   if ( v1 == null || v1.length == 0 || v2 == null || v2.length == 0 ) {
      return next(40002);
   }
   
   const num1 = parseInt(v1);
   const num2 = parseInt(v2);
   
   // 숫자 체크
   if ( isNaN(num1) || isNaN(num2) ) {
      return next(40003);
   }
   
   var result = num1 + num2;
   res.send('Result : ' + result);
}

// 401 에러
function showAdmin(req, res, next) {
   var error = new Error('권한 없음');
   error.code = 401;
   return next(40001);
}

const customError = {
   40001 : { msg: '권한 없음', statusCode: 401},
   40002 : { msg: '입력값 없음', statusCode: 400},
   40003 : { msg: '입력값이 숫자가 아님', statusCode: 400},
}

function errorHandler(err, req, res, next) {
   // 에러 코드
   const errorInfo = customError[err];
   console.log('errorInfo :', errorInfo);
   
   // JSON 에러 메세지
   var msg = {
      code:err,
      message:errorInfo.msg
   }
   // 상태코드
   res.status(errorInfo.statusCode).json(msg);
}
