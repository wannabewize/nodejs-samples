var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

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

socket.on('message', function(msg, rinfo) {
   console.log(rinfo.address,' >> ', msg.toString());   
});

socket.bind(3000);


