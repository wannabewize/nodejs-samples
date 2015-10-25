var net = require('net');

var ip = '127.0.0.1';
var port = 3000;

console.log('trying to Chat Server : ', ip, port);

var socket = new net.Socket();
socket.connect({port : port, host : ip}, function() {
   console.log('Connected..');
      
   var is = process.stdin;
   
   is.on('data', function(data) {
      var str = data.toString().trim();      
      socket.write(str);
   });
   
   socket.on('data', function(data) {
      var str = data.toString();
      console.log(str);
   });
   
   socket.on('end', function() {
      console.log('Socket End event');
   });
   
   socket.on('close', function() {
      console.log('Socket Close Event');
   });
      
})

