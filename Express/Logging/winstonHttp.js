/**
 * winston의 HTTP를 시용한 로그 요청에 대한 서버
 *
 * */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// 로그는 /logging으로 Post 메세지로 전달된다.
app.post('/logging', function(req, res) {
	console.log(req.body);
	res.send('ok');
})


app.listen(3000, function() {
	console.log('Server is started.');
	startLogging();
});

/**
 * 로그 남기는 코드
 * winston의 HTTP Transport를 사용한다.
 * */


var winston = require('winston');
// 콘솔 출력 Transport 생략
winston.remove(winston.transports.Console);
// HTTP 요청으로 로그 남기도록 Transport 추가
winston.add(winston.transports.Http, {host:'127.0.0.1', port:3000, path:'/logging'});

function startLogging() {
	winston.info('test1');
	winston.info('test2');
}



