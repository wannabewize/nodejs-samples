/*
 * 쿠키 사용 예제
*/

var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
// 쿠키 파서 - req.cookies 사용 가능
app.use(cookieParser());

app.use('/favicon.ico', function(){}); // 파비콘 무시
app.use(function(req, res) {
	console.log('req.headers.cookie', req.headers.cookie);

	// 방문 횟수를 저장하기 위한 visit 쿠키	
	var visit = parseInt(req.cookies.visit);
	if ( ! visit ) {
		visit = 0;
	}
	visit = visit + 1;	
	res.cookie('visit',visit);

	// 최종 방문 날짜를 기록하는 last 쿠키
	var now = new Date();
	//YYYY.MM.DD
	var last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
	res.cookie('last',last);			

	// 최초 방문 날짜를 기록하는 since 쿠키	
	var since = req.cookies.since;
	if (! since ) {
		since = last;
	}
	res.cookie('since',since);
   
   res.end('visit : ' + visit + ' since : ' + since + ' last : ' + last);   
});

var port = 3000;
app.listen(port, function(err) {
   console.log('server is listening @' + port);
});