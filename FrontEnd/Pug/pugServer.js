var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/images', express.static(__dirname + '/../../Resources/images'));

var data = [
	{title:'야구', image:'baseball.png'},
	{title:'농구', image:'basketball.png'},
	{title:'축구', image:'football.png'}	
];

app.get('/', function(req, res) {
	res.render('sports', {title:'구기 종목', sports:data});
});

app.listen(3000);