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
      // 클라이언트가 접속을 종료하면 서버도 종료 시도
      server.close();
   });

   socket.on('error', function (error) {
      console.error('Socket Error Event ', error);
   });
});

server.on('listening', function() {
   console.log('Server is listening @', server.address().port);
})

// Server의 close 이벤트 - 연결이 남아있으면 종료되지 않는다.
server.on('close', function() {
   console.log('Server Close Event');
});

server.listen(3000);



