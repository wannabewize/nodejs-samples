var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

socket.bind(3000);

socket.on('listening', function() {
   socket.addMembership('224.0.0.114');   
});

socket.on('message', function(msg, rinfo) {
   console.log(rinfo.address,' >> ', msg.toString());   
});



