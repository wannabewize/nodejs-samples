var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

var server = http.createServer(app);
server.listen(3000);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/client.html');
});

// HTTP 모듈
// var server = http.createServer(function (req, res) {
//    fs.createReadStream('./client.html').pipe(res);
// });

// server.listen(3000);

// Socket.IO Server
// var IOServer = require('socket.io');
// var io = new IOServer(server);

// short form
var io = require('socket.io')(server);
io.on('connection', function (socket) {
   console.log('클라이언트 접속');

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', function () {
      console.log('Disconnected');
   });
});