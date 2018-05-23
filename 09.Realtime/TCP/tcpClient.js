const net = require('net');

const ip = '127.0.0.1';
const port = 3000;

console.log('trying to connect : ', ip, port);

const socket = new net.Socket();
socket.connect({port : port, host : ip}, () => {
   console.log('Server Connected');
   
   socket.on('data', data => {
      const str = data.toString();
      console.log('>> ', str);
   });
   
   socket.on('end', () => {
      console.log('Socket End event');
   });
   
   socket.on('close', () => {
      console.log('Socket Close Event');
   });
   
   // 서버에 데이터 전송
   socket.write('Hello Socket Server!\n');
   socket.write('Bye Bye~');
   
   // 연결 종료
   socket.end();
});

