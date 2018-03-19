const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer( (req, res) => {
   let result = {};

   // URL 분석
   const parsed = url.parse(req.url, true);
   result.pathname = parsed.pathname

   // URL중 query
   result.query = parsed.query;

   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify(result));
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});