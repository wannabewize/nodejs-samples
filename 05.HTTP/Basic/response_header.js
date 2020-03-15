const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    // Custom status Message
    res.statusMessage = 'Hello';

    const body = '<html><body><h1>Hello World</h1></body></html>';

    res.setHeader('Custom-Header', 'MyData');
    res.setHeader('Custom-Header2', 'MyData');
    res.setHeader('Content-Type', 'text/html');
    res.removeHeader('Custom-Header2');
    console.log('body.length :', body.length);
    res.setHeader('Content-Length', body.length);
    
    res.end(body);
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});