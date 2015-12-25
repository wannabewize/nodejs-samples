// HTTP Server
var http = require('http');
var server = http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type':'text/html'});
   res.end('<html><body<h1>Hello Node.js</h1></body></html>');
}).listen(3000);

server.on('clientError', function(err, socket) {
   console.log('Client Error err : ', err);
});


// 1초뒤 클라이언트 코드 실행
setTimeout(function() {
   startClient();
}, 1000);

// HTTP Client by TCP Socket
var net = require('net');
var ip = '127.0.0.1';
var port = 3000;

function startClient() {
   console.log('start client');
   
   var socket = new net.Socket();
   socket.connect({host:'127.0.0.1', port:3000}, function() {
      console.log('connect event socket');
      
      // 요청
      socket.write('GET / HTTP/1.1\r\n');
      socket.write('host : 127.0.0.1:3000\r\n');
      socket.write('\r\n')
      socket.end();
      
      // HTTP 응답이므로 end 이벤트까지 버퍼링
      var buffer = '';
      socket.on('data', function(chunk) {
         buffer += chunk;
      });
      socket.on('end', function() {
         console.log('== Response\n', buffer);                  
      });   
   });   
}

