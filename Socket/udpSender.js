const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const receiverAddress = '127.0.0.1';
const receiverPort = 3000;

const is = process.stdin;

is.on('data', data => {
   const str = data.toString().trim();
   if ( str == 'exit' ) {
      socket.close();
      process.exit();
   }
   socket.send(str, 0, str.length, receiverPort, receiverAddress, err => {
      if ( err ) {
         console.error('UDP Message send error.', err);   
         return;
      }
      
      console.log('UDP Message Send success');
   });
});