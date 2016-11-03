/**
 * 실제로 로그인 기능, 회원 가입 기능 작성하기 전에 회원 가입과 로그인 돼 있다고 가정하고 사용하기
 */
var express = require('express');
var app = express();

// Mock login, session
app.use(function(req, res, next) {
   // 사용자가 이미 가입돼있고, 로그인 돼 있다고 가정
   req.user = {
      name : 'IU',
      email : 'iu@gmail.com'
   };
   next();
});

app.get('/profile', function(req, res) {
   res.status(200).send('User Name : ' + req.user.name);   
});

app.listen(3000);