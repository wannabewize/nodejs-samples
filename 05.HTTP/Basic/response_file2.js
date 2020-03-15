const http = require('http');
const fs = require('fs');
const urlUtil = require('url');

const server = http.createServer(async (req, res) => {
    if (req.method == 'GET') {
        const parsed = urlUtil.parse(req.url);
        const path = __dirname + '/image' + parsed.pathname;
        console.log('pathname : ', parsed.pathname, 'path :', path);
        // 파일 접근 검사
        fs.access(path, (err) => {
            if ( err ) {
                console.log('file not found');
                res.statusCode = 404;
                res.end();
            }
            else {
                fs.createReadStream(path).pipe(res);
            }
        });
    }
    else {
        res.statusCode = 400;
        res.end();
    }
});
server.listen(3000, () => {
    console.log('server is running @3000');
});