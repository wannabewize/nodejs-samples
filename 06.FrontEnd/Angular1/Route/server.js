var express = require('express');
var app = express();

app.use(express.static('.'));
// 라이브러리 요청
app.use('/lib', express.static('./node_modules'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
