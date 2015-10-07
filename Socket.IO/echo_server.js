var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res) {
	fs.createReadStream('./echo_client.html').pipe(res);
});

app.listen(8080);

var io = require('socket.io')(app);
io.on('connection', function(socket){
	console.log('Connection!');
	 
	socket.on('message', function(data) {
		console.log('message from client : ', data['message']);
		socket.emit('echo', data);
	});
	
	socket.on('disconnect', function() {
		console.log('Disconnected');
	});
});