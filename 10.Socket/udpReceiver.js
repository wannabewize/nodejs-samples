const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.bind(3000);

socket.on('listening', () => {
   console.log('UDP Receiver is listening');
});

socket.on('message', (data, rinfo) => {
   console.log(rinfo.address + '>>', data.toString('utf8'));
});

socket.on('close', () => {
   console.log('Close Event');
});

socket.on('error', err => {
   console.log('Error : ', err);
});