var net = require('net');
var server = net.createServer(function (socket) {
   console.log('Connect Event ', socket.remoteAddress);

   // 클라이언트의 데이터 전송 이벤트
   socket.on('data', function (data) {      
      console.log('Data from : ' + socket.remoteAddress + ' data : ' + data);
      socket.write(data);
   });
   
   // 접속 종료 이벤트
   socket.on('end', function () {
      console.log('Socket End Event');
   })

   socket.on('close', function () {      
      console.log('Socket Close Event');
   });

   socket.on('error', function (error) {
      console.error('Socket Error Event ', error);
   });
});
server.listen(3000);

// Server의 close 이벤트. 연결이 남아 있으면 발생하지 않는다.
server.on('close', function() {
   console.log('Server Close Event');
});
