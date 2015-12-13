var http = require('http');
// 1024보다 작은 포트로도 테스트
var port = 3000;

var server1 = http.createServer();
server1.listen(port);

var server2 = http.createServer();

// 에러 이벤트 
// server2.on('error', function(err) {
//    console.log('Error', err);
// });

server2.listen(port, function(err) {
   if ( err ) {
      // 포트 에러는 여기서 잡히지 않는다.
      console.log('Error', err);      
      return;
   }
   console.log('Server is listening @ 3000');
});