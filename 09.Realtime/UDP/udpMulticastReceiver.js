var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var address = '239.255.255.255';
var port = 49001;

socket.bind(port);

socket.on('listening', function () {
    console.log('Multicast packet from ' + address + ' Receiving.');
    socket.addMembership(address);
});

socket.on('message', (msg, rinfo) => {
    console.log(rinfo.address, ' >> ', msg.toString());
});