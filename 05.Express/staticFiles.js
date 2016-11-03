var express = require('express');
var app = express();

// SERVER-ADDRESS/image.png -> ./files/image.png
app.use(express.static(__dirname + '/files'));
// SERVER-ADDRESS/static/image.png -> ./files/image.png 에서 찾기
app.use('/static', express.static('files'));

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.listen(3000, function() {
   console.log('Server is listening @3000');
});
