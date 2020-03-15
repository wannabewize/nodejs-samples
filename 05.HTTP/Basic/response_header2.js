const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {
    const body = '<html><body><h1>Hello World</h1></body></html>';

    const headers = {
        'Custom-Header': 'MyData',
        'Content-Type': 'text/html',
        'Content-Length': body.length
    };
    res.writeHead(200, headers);
    
    // Error
    //res.setHeader('Custom-Header2', 'MyData');
    
    res.end(body);
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});