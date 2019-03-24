const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        // get이면 폼 목록 출력
        fs.createReadStream('form.html').pipe(res);
    }
    else if (req.method == 'POST') {
        const contentType = req.headers['content-type'];
        console.log('content type : ', contentType);

        if (contentType.startsWith('application/x-www-form-urlencoded')) {
            res.end('url encoded 방식');
        }
        else if (contentType.startsWith('application/json')) {
            res.end('JSON 방식');
        }
        else if (contentType.startsWith('multipart/form-data')) {
            res.end('Multipart 방식');
        }
        else {
            res.statusCode = 400;
            res.end('분석할 수 없는 방식');
        }
    }
});
server.listen(3000, () => {
    console.log('Server is running @ 3000');
});