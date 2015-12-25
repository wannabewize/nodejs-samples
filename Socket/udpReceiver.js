var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

socket.bind(3000);

socket.on('listening', function() {
   console.log('UDP Receiver is listening');
});

socket.on('message', function(data, rinfo) {
   console.log(rinfo.address + '>>', data.toString('utf8'));
});

socket.on('close', function() {
   console.log('Close Event');
});

socket.on('error', function(err) {
   console.log('Error : ', err);
});