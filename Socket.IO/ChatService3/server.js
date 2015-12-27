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
var rooms = ['trevel', 'game', 'dining', 'All'];

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
	console.log('client Connected!');
   
   // 닉네임 등록. socket.id로 구분     
   var nickName = 'Guest' + Math.floor(Math.random()*100);
   users[socket.id] = nickName; 
   console.log(nickName + ' connected');
   
   var room;
	
	// 개별 클라이언트에 환영 메세지
	socket.emit('chatMessage', {nick:'Admin', msg:'Welcome to Socket.IO Chat Service'});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('chatInput', function(data) {
      var msg = data['message'];
      var sender = users[socket.id];      
      
		console.log('message from client : ', data['message']);		
      
      if ( room )
         io.to(room).emit('chatMessage', data);
      else
         io.emit('chatMessage', data);
	});
   
   // 채팅방 들어가기
   socket.on('joinRoom', function(data) {
      room = data.room;
      socket.join(room);
   });
   
   socket.on('leaveRoom', function() {
      room = null;
   });
	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});