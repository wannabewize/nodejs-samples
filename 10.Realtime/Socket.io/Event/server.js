const io = require('socket.io')(3000);

io.on('connection', (socket) => {
   console.log('클라이언트 연결');

   socket.on('hello', () => {
      console.log('hello 발생')
   });

   socket.on('say', (data1, data2) => {
      console.log(`say 발생. ${data1}, ${data2}`)
   });

   socket.on('echo', (msg) => {
      console.log(`echo 이벤트 발생 : ${msg}`)
      socket.emit('echo-back', msg);
   });

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', () => {
      console.log('클라이언트 연결 종료');
   });
});