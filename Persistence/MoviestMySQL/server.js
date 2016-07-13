var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var movieRouter = require('./router/movie_router');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))


app.use(movieRouter);

// 여기까지 오면 - 에러
app.use(function(req, res, next) {
  res.sendStatus(404);  
});

app.use(function(err, req, res, next) {
   res.status(500).send({mag: err.message});
});

app.listen(3000, function() {
	console.log('server is listening 3000');
});