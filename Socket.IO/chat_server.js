var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res) {
	fs.createReadStream('./chat_client.html').pipe(res);
});

app.listen(8080);

var io = require('socket.io')(app);
io.on('connection', function(socket){
	console.log('client Connected!');
	
	// 개별 클라이언트에 환영 메세지
	socket.emit('message', {message:'Welcome to Socket.IO Chat Service'});
	 
	 // 채팅 메세지는 모든 클라이언트에게
	socket.on('clientInput', function(data) {
		console.log('message from client : ', data['message']);		
		io.emit('message', data);
	});
	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});