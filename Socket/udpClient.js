var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('Some bytes');
client.send(message, 0, message.length, 3000, '127.0.0.1', function(err) {
   if ( err ) {
   	console.error('UDP Message send error.', err);   
      return;
   }
   
   console.log('UDP Message Send success');
	client.close();
});