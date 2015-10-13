var http = require('http');
var fs = require('fs');

// 이미지 파일 경로
var path = './images/cat.jpg';
try {
   fs.accesssSync(path, fs.F_OK);
}
catch ( err ) {
   console.log('/images/cat.jpg 파일 없음.');
   process.exit(1);
}

var server = http.createServer(function(req, res) {
	
	fs.readFile(path, function(err, data) {
      res.statusCode = 200;
      res.setHeader('Content-type','image/jpg');
      res.end(data);
	});
});
server.listen(3000);