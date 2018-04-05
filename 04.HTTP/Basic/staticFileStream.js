/**
 * readFile과 스트림 방식
 */
const http = require('http');
const fs = require('fs');
const path = 'movie/movie.mp4';

const contentType = 'video/mp4';

const server1 = http.createServer((req, res) => {
   fs.readFile(path, function (err, data) {
      res.statusCode = 200;
      res.setHeader('Content-type', contentType);
      res.end(data);
      
   });
});
server1.listen(3000);

const server2 = http.createServer((req, res) => {
   res.setHeader('content-type', contentType);
   fs.createReadStream(path).pipe(res);
});
server2.listen(3001);