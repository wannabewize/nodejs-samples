var http = require('http');
var server = http.createServer();

server.on('checkContinue', function (request, response) {
   console.log('check continue event');
});

server.on('clientError', function (exception, socket) {
   console.log('client error event');
});

server.on('close', function() {
	console.log('close');
});

server.on('connect', function (request, socket, head) {
   console.log('connect event');
});

server.on('connection', function(socket) {
	console.log('connection event');
});

server.on('request', function(request, response) {
   console.log('request event : ', request.url);
   response.end('Hello');
});

server.on('upgrade', function(request, socket, head){
   console.log('upgrade event');
});

server.listen(3000);