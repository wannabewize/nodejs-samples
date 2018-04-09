/**
 * Pug 에제
 */
const express = require('express');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('page', {count:10});
});

app.listen(3000);