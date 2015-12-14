var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
   // 이미지 파일 경로
   var path = './images/dog.jpg';
   fs.access(path, fs.F_OK, function (err) {
      if (err) {
         res.statusCode = 404;
         res.end('Not found');
         return;
      }
      fs.readFile(path, function (err, data) {
         res.statusCode = 200;
         res.setHeader('Content-type', 'image/jpg');
         res.end(data);
      });
   });

});
server.listen(3000);