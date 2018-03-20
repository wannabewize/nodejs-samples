const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
   // 이미지 파일 경로
   // const path = './image/dog.jpg';
   const path = './image/cat.jpg';
   fs.access(path, fs.F_OK, (err) => {
      if (err) {
         res.statusCode = 404;
         res.end();
         return;
      }
      fs.readFile(path, (err, data) => {
         res.statusCode = 200;
         res.setHeader('Content-type', 'image/jpg');
         res.end(data);
      });
   });

});
server.listen(3000);