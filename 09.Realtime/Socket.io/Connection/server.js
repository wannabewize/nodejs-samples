// Socket.IO 서버

// const SocketIO = require('socket.io');
// const io = new SocketIO(3000);

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
   console.log('클라이언트 연결');

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', () => {
      console.log('클라이언트 연결 종료');
   });
});