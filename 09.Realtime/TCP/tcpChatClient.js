const net = require('net');

const ip = '127.0.0.1';
const port = 3000;

console.log('trying to Chat Server : ', ip, port);

const socket = new net.Socket();
socket.connect({port : port, host : ip}, () => {
   console.log('Connected..');
      
   var is = process.stdin;
   
   // 키보드 입력
   is.on('data', (data) => {
      var str = data.toString().trim();      
      socket.write(str);
   });
   
   // 소켓 입력
   socket.on('data', (data) => {
      var str = data.toString();
      console.log(str);
   });
   
   socket.on('end', () => {
      console.log('Socket End event');
   });
   
   socket.on('close', () => {
      console.log('Socket Close Event');
      process.exit();
   });
      
})

