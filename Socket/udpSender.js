var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var message = new Buffer('Hello World');
socket.send(message, 0, message.length, 3000, '127.0.0.1', function(err) {
   if ( err ) {
   	console.error('UDP Message send error.', err);   
      return;
   }
   
   console.log('UDP Message Send success');
	socket.close();
});