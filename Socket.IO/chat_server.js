var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/chat_client.html');
});

// 닉네임 기능
var nickNames = {};

var io = require('socket.io')(server);
io.on('connection', function(socket){

   // 닉네임 등록. socket.id로 구분     
   var nickName = 'Guest' + Math.floor(Math.random()*100);
   nickNames[socket.id] = nickName; 
   console.log(nickNames + ' connected');
   
	// 개별 클라이언트에 환영 메세지
	socket.emit('serverMessage', {nick:'Admin', msg:'Welcome to Socket.IO Chat-Service, ' + nickName});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('clientMessage', function(data) {
      var msg = data['message'];
      var sender = nickNames[socket.id];      
		console.log('message from ', sender, msg);		
      io.emit('serverMessage', {nick:sender, msg:msg});
	});
   	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});

// 네임 스페이스
var mySpace = io.of('/myNamespace');

mySpace.on('connection', function(socket){
   console.log('mySpace 에 접속됨');

   socket.on('howAreYou', function() {
      console.log('Fine thank and you?');
   });
   
   mySpace.emit('hi', {message:'Hello everyone!'});
   socket.emit('hi', {message:'Hello, stranger'});
   
});
