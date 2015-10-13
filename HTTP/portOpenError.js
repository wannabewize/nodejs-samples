var http = require('http');

var server1 = http.createServer();
server1.listen(3000);

var server2 = http.createServer();

// 에러 이벤트 
// server2.on('error', function(err) {
//    console.log('Error', err);
// });

server2.listen(3000, function(err) {
   if ( err ) {
      // 포트 에러는 여기서 잡히지 않는다.
      console.log('Error', err);      
      return;
   }
   console.log('Server is listening @ 3000');
});