var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
   fs.createReadStream('./client.html').pipe(res);
});

server.listen(3000);

var io = require('socket.io')(server);
io.on('connection', function (socket) {
   console.log('클라이언트 접속');

   socket.on('disconnect', function () {
      console.log('Disconnected');
   });
});