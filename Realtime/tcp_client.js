var net = require('net');

if ( process.argv.length < 3 ) {
   console.log('node tcp_client [ipaddress] [port]');
   process.exit();
}

var ip = process.argv[2];
var port = process.argv[3];

console.log('trying to connect : ', ip, port);

var socket = new net.Socket();
socket.connect({port : port, host : ip}, function() {
   console.log('Connected..');
   var is = process.stdin;
   
   is.on('data', function(data) {
      var str = data.toString().trim();
      console.log('Data Event : ', str);
      
      if ( str == 'close' ) {
         socket.end();
      }
      else {
         socket.write(str);
      }
   });
   
   socket.on('data', function(data) {
      var str = data.toString();
      console.log(' >> ', str);
   });
   
   socket.on('end', function() {
      console.log('Socket End event');
   });
   
   socket.on('close', function() {
      console.log('Socket Close Event');
   });
      
})

