var express = require('express');
var app = express();

app.use('/add', add);
app.use('/admin', showAdmin);
app.use(errorHandler);
app.listen(3000);

// add?value1=1&value2=2
function add(req, res, next) {
   var v1 = req.query['value1'];
   var v2 = req.query['value2'];
   
   // 입력 파라미터 체크
   if ( v1 == null || v1.length == 0 || v2 == null || v2.length == 0 ) {
      var error = new Error('value1, value2 입력이 없습니다.');
      error.code = 400;
      return next(error);
   }
   
   var op1 = parseInt(v1);
   var op2 = parseInt(v2);
   
   // 숫자 체크
   if ( isNaN(op1) || isNaN(op2) ) {
      var error = new Error('value1, value2는 숫자만 입력');
      error.code = 400;
      return next(error);
   }
   
   var result = op1 + op2;
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
