const http = require('http');
const urlUtil = require('url');

const server = http.createServer(async (req, res) => {
    if (req.method == 'GET') {
        const parsed = urlUtil.parse(req.url);
        console.log('path : ', parsed.pathname);
        switch ( parsed.pathname ) {
            case '/image':
            res.end('이미지 파일 전송');
            break;
            case '/movies':
            res.end('영화 목록 전송');
            break;
            case '/theaters':
            res.end('극장 목록 전송');
            break;
            default:
            res.statusCode = 400;
            res.end();
        }
    }
    else {
        res.statusCode = 400;
        res.end();
    }
});
server.listen(3000, () => {
    console.log('server is running @3000');
});