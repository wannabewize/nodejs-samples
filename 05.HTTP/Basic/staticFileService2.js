console.log(`
            == 정적 파일 서버 샘플
            USAGE : resources 폴더에 jpg, mp3, mp4파일 준비
            Server/reources/FILENAME 으로 요청`);

const http = require('http');
const fs = require('fs');
const pathUtil = require('path');

const server = http.createServer( (req, res) => {

   console.log('method : ' + req.method + ' url : ' + req.url);
   if ( req.url == '/favicon.ico') {
   	// 파비콘 응답
   	return;
   }
   // 리소스 파일 경로
   var path = __dirname + pathUtil.sep + 'resources' + req.url;
   console.log('Resource Path :', path);

   // 파일 접근 가능 여부 확인   
   fs.access(path, fs.R_OK, (err) => {
      // 접근 불가능시 404 에러      
      if (err) {
         res.statusCode = 404;
         res.end('Not Found');
         return;
      }
      
      // 파일이 존재하면 파일을 읽어서 응답
      fs.readFile(path, (err, data) => {
         if (err) {
            // 파일은 있지만 읽지 못하면 500번 에러
            res.statusCode = 500;
            res.end('Can not read Resource');
            return;
         }
         var ext = pathUtil.extname(path).toLowerCase();
         console.log(ext);
         res.statusCode = 200;
         var contentType = getContentType(ext);
         res.setHeader('Content-type', contentType);
         res.end(data);
      });
   });
});
server.listen(3000);


function getContentType(ext) {
   switch (ext) {
      case '.jpg':
         return 'image/jpg';
      case '.mp3':
         return 'audio/mp3';
      case '.mp4':
         return 'video/mp4';
      default:
         return 'text/plain';
   }
}