const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {
    console.log('\n\n== Request Event fired ==');
    switch ( req.method.toUpperCase() ) {
        case 'GET':
        console.log('GET 요청'); break;
        case 'POST':
        console.log('POST 요청'); break;
        default:
        console.log('GET/POST 외 요청')
    }
	console.log('method : ' + req.method);
	console.log('url : ' + req.url);
	console.log('== headers==');
    console.log('accept :', req.headers['accept']);
    console.log('from :', req.headers['from']);
    console.log('user-agent :', req.headers['user-agent']);
    console.log('connection :', req.headers['connection']);
    console.log('content-type :', req.headers["content-type"]);
    
	
	res.end('Hello Node.js');
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});