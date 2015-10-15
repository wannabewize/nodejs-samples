var express = require('express');
var bodyParser = require('body-parser');
var movieRouter = require('./movie_router');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
// JADE 설정
// app.set('view engine', 'jade');
// EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Logging
app.use(function(req, res, next) {
	console.log('request : ' + req.method + ' url : ' + req.url);
	next();
});

app.use(movieRouter);

// 여기까지 오면 - 에러 상황
app.use(function(req, res, next) {
  res.sendStatus(404);  
});

app.listen(3000, function() {
	console.log('server is listening 3000');
});