const http = require('http');
const server = http.createServer(function(req, res) {
	var body = '<html>';
	body += '<body>';
	body += '<h1>Hello World</h1>';
	body += '</body>';
	body += '</html>';
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', body.length);
	res.write(body);
	res.end();
});

server.listen(3000, function(err) {
   if ( err ) {
      console.log('Error', err);
   }
});