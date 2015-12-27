/**
 * Socket.IO 채팅 서비스
 * 네임 스페이스 적용 예제
 * 서버 콘솔에서 키입력 - 클라이언트의 경고창으로 뜨기 
 */
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);

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
   
	// 개별 클라이언트에 환영 메세지
	socket.emit('chatMessage', {nick:'Admin', msg:'Welcome to Socket.IO Chat-Service, ' + nickName});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('chatInput', function(data) {
      var msg = data['message'];
      var sender = users[socket.id];      
		console.log(sender + ' >> '+ msg);		
      io.emit('chatMessage', {nick:sender, msg:msg});
	});
   	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});

// 네임 스페이스 - 서버의 콘솔 입력을 시스템 메세지로 사용
var is = process.stdin;
var system = io.of('/system');
is.on('data', function(chunk) {
   system.emit('message', chunk.toString());
});   

system.on('connection', function(socket){
   console.log('system namespace에 접속');

   socket.on('ping', function() {
      console.log('Clinet - System namespace ping');
   });
   
});
