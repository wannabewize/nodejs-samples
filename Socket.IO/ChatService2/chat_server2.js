var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);

var rooms = ['server', 'client', 'designer', 'project'];

app.get('/rooms', function(req, res) {
   res.json(rooms);
});

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/chat_client.html');
});

var io = require('socket.io')(server);
io.on('connection', function(socket){
	console.log('client Connected!');
   
   var room;
	
	// 개별 클라이언트에 환영 메세지
	socket.emit('message', {message:'Welcome to Socket.IO Chat Service'});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('clientMessage', function(data) {
		console.log('message from client : ', data['message']);		
      
      if ( room )
         io.to(room).emit('serverMessage', data);
      else
         io.emit('serverMessage', data);
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