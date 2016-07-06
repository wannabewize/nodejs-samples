var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('page');
});

app.listen(3000);