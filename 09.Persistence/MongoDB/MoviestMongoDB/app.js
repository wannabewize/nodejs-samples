var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var movieRouter = require('./movieRouter');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(movieRouter);

// 여기까지 오면 - 에러
app.use(function(req, res, next) {
  res.sendStatus(404);  
});

app.use(function(err, req, res, next) {
   res.send('ERROR', err.stack);
});

app.listen(3000, function() {
	console.log('server is listening 3000');
});