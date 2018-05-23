const http = require('http');
const express = require('express');
const app = express();

var server = http.createServer(app);
// app.listen() 으로 하지 않도록 주의!
server.listen(3000);

// 파비콘
app.get('/favicon.ico', (req, res) => {res.send('')});

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

// short form
var io = require('socket.io')(server);
io.on('connection', (socket) => {
   console.log('클라이언트 접속');

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', () => {
      console.log('Disconnected');
   });
});