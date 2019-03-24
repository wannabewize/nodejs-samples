/**
 * 메세지 바디 분석
 */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
            console.log(`${chunk.length} data received`);
        });
        
        req.on('end', () => {
            console.log(`data completed. ${body.length} received`);
            console.log(body.toString());

            res.end('OK');
        });
    }
    else {
        res.statusCode = 400;
        res.end();
    }
});
server.listen(3000);