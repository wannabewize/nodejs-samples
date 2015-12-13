var http = require('http');
var server = http.createServer(function(request, response) {
	response.statusCode = 200;
	response.write('Hello World');	
});
server.listen(3000);