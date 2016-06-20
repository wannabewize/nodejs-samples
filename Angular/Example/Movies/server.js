var express = require('express');
var bodyParser = require('body-parser');
var movieRouter = require('./routes/movie_router');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.use(movieRouter);


app.listen(3000, function() {
	console.log('Movie server is listening 3000');
});