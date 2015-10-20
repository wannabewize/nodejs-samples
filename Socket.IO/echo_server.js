var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
server.listen(3000);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/echo_client.html');
});

var io = require('socket.io')(server);
io.on('connection', function(socket){
	console.log('클라이언트 접속');  
	 
	socket.on('message', function(data) {
		console.log('message from client : ', data['message']);
		socket.emit('echo', data);
	});
	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});