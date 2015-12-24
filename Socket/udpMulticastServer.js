var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

socket.on('message', function(msg, rinfo) {
	console.log('Message Event\n', 'Message : ', msg.toString(), ' from : ', rinfo.address, rinfo.port);
	// socket.send(msg, 0, msg.length, 3000, rinfo.address);
});

socket.on('listening', function() {
	console.log('listening Event');
});

socket.on('close', function() {
	console.log('Socket closed');
});

// 서버에서 작성한 내용을 클라이언트로 멀티 캐스트
var is = process.stdin;

is.on('data', function(chunk) {
   var msg = chunk.toString();
   if ( msg.trim() == 'exit' ) {
      // 종료
      is.end();
      socket.close();                  
   }
   else {      
      socket.send(msg, 0, msg.length, 3000, '224.0.0.114', function(err) {
         if ( err ) {
            console.error('UDP Message send error.', err);   
            return;
         }         
         console.log('UDP Message Send success');
      });      
   }
});