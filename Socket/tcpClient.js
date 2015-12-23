var net = require('net');

var ip = '127.0.0.1';
var port = 3000;

console.log('trying to connect : ', ip, port);

var socket = new net.Socket();
socket.connect({port : port, host : ip}, function() {
   console.log('Server Connected');
   
   socket.on('data', function(data) {
      var str = data.toString();
      console.log('>> ', str);
   });
   
   socket.on('end', function() {
      console.log('Socket End event');
   });
   
   socket.on('close', function() {
      console.log('Socket Close Event');
   });
   
   // 서버에 데이터 전송
   socket.write('Hello Socket Server!\n');
   socket.write('Bye Bye~');
   
   // 연결 종료
   socket.end();
});

