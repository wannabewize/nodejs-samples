var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/images', express.static(__dirname + '/../../Resources/images'));

app.use(function(req, res) {
	res.render('page');
});

app.listen(3000);