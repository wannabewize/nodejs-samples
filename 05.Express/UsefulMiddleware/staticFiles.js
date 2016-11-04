/**
 * 정적 파일 요청 다루기
 */

const express = require('express');
const app = express();

// SERVER-ADDRESS/image.png -> ./files/image.png
app.use(express.static(__dirname + '/files'));
// SERVER-ADDRESS/static/image.png -> ./files/image.png 에서 찾기
app.use('/static', express.static('files'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/staticFiles.html');
});

app.listen(3000, function() {
   console.log('Server is listening @3000');
});
