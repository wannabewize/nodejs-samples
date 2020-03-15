const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        // 비디오 스트림
        res.setHeader('Content-Type', 'video/mp4');
        
        fs.createReadStream('movie/movie.mp4').pipe(res);
        // 파일을 전체 읽는 것보다 스트림 처리가 유리
        // fs.readFile(path, (err, data) => {
        //     res.end(data);      
        // });        
    }
    else {
        res.statusCode = 400;
        res.end();
    }
});
server.listen(3000, () => {
    console.log('server is running @3000');
});