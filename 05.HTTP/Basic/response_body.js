const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {    
    const msg = 'Hello Node.js';

    res.write('<html>');
    res.write('<body>');
    res.write(`<h1>${msg}</h1>`);
    res.write('</body></html>');
    res.end();
});

server.listen(port, () => {
	console.log(`Server running at ${port}`);
});