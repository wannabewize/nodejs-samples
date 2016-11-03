/**
 * 요청 메세지 출력용
*/
var net = require('net');
var server = net.createServer(function(socket) {
   socket.on('data', function(chunk) {
      console.log(chunk.toString());
   });
   socket.on('end', function() {
      socket.end('Hello');
   });
});
server.listen(3000);