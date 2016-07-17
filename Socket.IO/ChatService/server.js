const express = require('express');
const http = require('http');

const app = express();
app.use(express.static('./public'));

const server = http.createServer(app);
server.listen(3000);

var chatrooms = [
   {name:'lounge', roomid:0},
   {name:'server', roomid:1},
   {name:'client', roomid:2},
   {name:'design', roomid:3}
];

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/public/index.html');
});

app.get('/chatrooms', (req, res) => {
   res.send({count : chatrooms.length, data:chatrooms});
});

app.get('/chatroom/:roomid', function(req, res) {
   var roomid = req.params.roomid;
   res.render('chatroom', {roomid:roomid});
});

// 닉네임 기능
var users = {};

var io = require('socket.io');
io = io(server);

io.on('connection', socket => {
   // 닉네임 등록. socket.id로 구분
   var nickName = 'Guest' + Math.floor(Math.random()*100);
   users[socket.id] = nickName;
   console.log(nickName + ' connected');

   // 개별 클라이언트에 환영 메세지
   socket.emit('chatMessage', {nick:'Admin', message:'Welcome to Socket.IO Chat Service'});

   var room;
   room = chatrooms[0];
   socket.join(room);

   // 채팅 메세지는 모든 클라이언트에게
   socket.on('chatInput', data => {
      var msg = data['message'];
      var nick = users[socket.id];
      var chat = {nick:nick, message:msg};

      // 채팅방으로 메세지 이벤트 발생
      io.to(room).emit('chatMessage', chat);
      console.log(nick + '(' + room + ') >> ' + msg);
   });

   // 채팅방 들어가기
   socket.on('joinRoom', function(data) {
      // 기존 방에서 나오기
      socket.leave(room);

      room = data.room;
      socket.join(room);
      var nick = users[socket.id];
      console.log(nick + ' join ' + room);
   });
});