var http = require('http');
var fs = require('fs');
var pathUtil = require('path');

var server = http.createServer(function (req, res) {
   if ( req.url == '/favicon.ico') {
   	// 파비콘 응답
   	return;
   }
   else if ( req.url == '/' ) {
      res.writeHead(200, {'content-type':'text/html'});
      fs.createReadStream('./public/htmlPage.html').pipe(res);
   }
   else {
      console.log('path : ', req.url);
      // 리소스 파일 경로
      var path = __dirname + req.url;
      console.log('Resource Path :', path);
   
      // 파일 접근 가능 여부 확인   
      fs.access(path, fs.R_OK, function (err) {
         // 접근 불가능시 404 에러      
         if (err) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
         }
         
         var ext = pathUtil.extname(path).toLowerCase();
         res.statusCode = 200;      
         var contentType = getContentType(ext);
         res.setHeader('Content-type', contentType);
         
         // 파일이 존재하면 파일을 읽어서 응답
         fs.createReadStream(path).pipe(res);
      });      
   }
});
server.listen(3000);

function getContentType(ext) {
   switch (ext) {
      case '.jpg':
         return 'image/jpg';
      case '.css':
         return 'application/css';
      case '.html':
         return 'text/html';
   }
}