/*
 * 쿠키 사용 예제
*/

var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
// 쿠키 파서 - req.cookies 사용 가능
app.use(cookieParser('SECRET_KEY'));

app.use('/favicon.ico', function(){}); // 파비콘 무시
app.use(function(req, res) {
	console.log('req.headers.cookie', req.headers.cookie);
   
   var signed = req.signedCookies.signed;
   var path = req.cookies.path;
   var shortLife = req.cookies.shortLife;
   
   console.log('signed : ', signed);
   console.log('path : ', path);   
   console.log('shortLife : ', shortLife);
   
   res.cookie('signed', 'OriginalValue', {signed:true})   
   res.cookie('path', 'CookieValue-Path', {path:'/path'});
   res.cookie('shortLife', 'CookieValue-MaxAge', {maxAge:1000}); // 1초
   
   res.end('Cookie Example');   
});

var port = 3000;
app.listen(port, function(err) {
   console.log('server is listening @' + port);
});