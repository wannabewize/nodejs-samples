
// http, express 서버
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

server.listen(3000, err => {
   console.log('Server is running @ 3000');
});

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

// Socket.io 서버
const io = require('socket.io')(server);

io.on('connection', socket => {
   // 클라이언트가 보낸 메세지 이벤트
   socket.on('message', (data) => {
      console.log('client message :', data);

      const text = data.message;
      io.emit('serverMessage', { message: text })
   });
});
