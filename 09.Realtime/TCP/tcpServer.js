const net = require('net');
const server = net.createServer( socket => {
   console.log('Socket Client connect From ', socket.remoteAddress);
   socket.write('Welcome to Socket Server\n');
   
   // 클라이언트의 데이터 전송 이벤트
   socket.on('data', data => {    
      var textMsg = data.toString();
      if ( textMsg.trim() == 'exit' ) {
         socket.end();
      }
      console.log('Client send : ', textMsg);  
   });
   
   // 접속 종료 이벤트
   socket.on('end', () => {
      console.log('Client disconnected');
   });

   socket.on('close', () => {      
      console.log('Socket Close Event');
   });

   socket.on('error', error => {
      console.error('Socket Error Event ', error);
   });
});

server.on('listening', () => {
   console.log('Server is listening @', server.address().port);
});

// Server의 close 이벤트 - 연결이 남아있으면 종료되지 않는다.
server.on('close', () => {
   console.log('Server Close Event');
});

server.listen(3000);



