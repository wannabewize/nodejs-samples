var http = require('http');
var server = http.createServer(function(request, response) {
	var body = '<html>';
	body += '<body>';
	body += '<h1>Hello World</h1>';
	body += '</body>';
	body += '</html>';
	
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.setHeader('Content-Length', body.length);
	response.write(body);
	response.end();	
});
server.listen(3000, function(err) {
   if ( err ) {
      console.log('Error', err);
   }
});