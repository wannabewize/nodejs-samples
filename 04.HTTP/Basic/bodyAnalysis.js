const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer( (req, res) => {
   req.on('data', (chunk) => {
      console.log('Request data event');
   });

   req.on('end', () => {
      console.log('Request end event');
   });
   
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify(result));
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});