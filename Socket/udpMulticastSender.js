var dgram = require('dgram');

var socket = dgram.createSocket('udp4');
var address = '239.255.255.255';
var port = 49001;

// 서버에서 작성한 내용을 클라이언트로 멀티 캐스트
var is = process.stdin;

is.on('data', chunk => {
   var msg = chunk.toString();
   if ( msg.trim() == 'exit' ) {
      // 종료
      is.end();
      socket.close();
   }
   else {      
      socket.send(msg, 0, msg.length, port, address, err => {
         if ( err ) {
            console.error('UDP Message send error.', err);   
            return;
         }         
         console.log('UDP Message Send success');
      });      
   }
});