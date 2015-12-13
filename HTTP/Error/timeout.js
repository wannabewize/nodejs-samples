/**
 * Timeout Error 예제
*/
var http = require('http');
var server = http.createServer(function(req, res) {
	res.setHeader('Content-Type','text/plain');
	res.write('Hello World');
	res.end();
});
// Timeout 시간을 200ms로
server.setTimeout(200);

server.listen(3000, function() {
   startClient();
});


// 클라이언트 요청. 요청 마무리를 500ms로. Timeout 에러 발생시키기
function startClient() {
   console.log('== Start Cleint');
   var option = {
      hostname : '127.0.0.1',
      port:3000,
   };
   var req = http.request(option, function(res) {
      console.log('STATUS: ' + res.statusCode);
      res.on('data', function(chunk) {
         console.log(chunk.toString());
      });
      res.on('end', function() {
         server.close();         
      });
   });
   
   req.on('error', function(err) {
      console.error('error : ', err);
   });
   
   // Timeout Error
   setTimeout(function() {
      req.end();
   }, 500);
}

