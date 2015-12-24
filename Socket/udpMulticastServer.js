var dgram = require('dgram');

var socket = dgram.createSocket('udp4');
socket.bind(3000);

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