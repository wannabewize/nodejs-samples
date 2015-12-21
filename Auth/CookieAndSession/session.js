var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({
  secret: 'Secret Key',
  resave: false,
  saveUninitialized: false
}));

// 파비콘 무시
app.use('/favicon.ico', function(){}); 

app.use(function(req, res) {
	console.log('req.session', req.session);
	// 세션 ID
	var sessionID = req.sessionID;
	console.log('session id :', sessionID);
		
	// 방문 횟수
	console.log('visit : ', req.session.visit);
	if ( req.session.visit )
		req.session.visit = parseInt(req.session.visit) + 1;		
	else
		req.session.visit = 1;		
	
	// 마지막 방문 날짜
	var now = new Date();
	var last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
	req.session.last = last;

	// 첫 방문 날짜		
	if (! req.session.since ) {
		req.session.since = last;
	}	
	
	res.end('visit : ' + req.session.visit + ' since : ' + req.session.since + ' last : ' + req.session.last);
});

app.listen(3000);


