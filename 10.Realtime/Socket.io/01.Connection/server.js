// Socket.IO 서버

const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer, {
   cors: { origin: (origin, callback) => {
      console.log('cors function works:', origin);
      callback(null, origin);
   } }
});
httpServer.listen(3000);

io.on('connection', (socket) => {
   console.log('클라이언트 연결');
   // console.log('클라이언트 :', socket);
   console.log('클라이언트 id :', socket.id);

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', () => {
      console.log('클라이언트 연결 종료');
   });
});