/*
 * 서명된 쿠키 사용 예제 with MAC
*/

var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
// 쿠키 파서 - req.cookies 사용 가능
app.use(cookieParser('Keyboard cat'));

app.use('/favicon.ico', function(){}); // 파비콘 무시
app.use(function(req, res) {
	console.log('req.headers.cookie', req.headers.cookie);
   console.log('req.signedCookies : ', req.signedCookies);
   
   var last = req.signedCookies.last;
   console.log('Read cookie : ', last);
   
	// 최종 방문 날짜를 기록하는 last 쿠키
	var now = new Date();
	var today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
   res.cookie('last',today, {signed:true});
   
   res.end('last : ' + last);   
});

var port = 3000;
app.listen(port, function(err) {
   console.log('server is listening @' + port);
});