/**
 * ChatService with Socket.IO
 * Room example
 */
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);

// 채팅방
var rooms = ['lounge', 'trevel', 'game', 'dining'];

// 채팅방 목록
app.get('/rooms', function(req, res) {
   res.json(rooms);
});

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/client.html');
});

// 닉네임 기능
var users = {};

var io = require('socket.io')(server);
io.on('connection', function(socket){
   // 닉네임 등록. socket.id로 구분     
   var nickName = 'Guest' + Math.floor(Math.random()*100);
   users[socket.id] = nickName; 
   console.log(nickName + ' connected');
   
   // 기본값으로는 0번째 방으로
   var room = rooms[0];
   socket.join(room);
	
	// 개별 클라이언트에 환영 메세지
	socket.emit('chatMessage', {nick:'Admin', msg:'Welcome to Socket.IO Chat Service'});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('chatInput', function(data) {
      var msg = data['message'];
      var nick = users[socket.id];    
      var chat = {nick:nick, msg:msg};
      
      // 채팅방으로 메세지 이벤트 발생        
      console.log(nick + '(' + room + ') >> ' + msg);   
      if ( room )   
         io.to(room).emit('chatMessage', chat);
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
   
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});