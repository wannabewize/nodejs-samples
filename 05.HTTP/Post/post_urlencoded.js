const http = require('http');
const query = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.method == 'GET') {
      // get이면 폼 목록 출력
      fs.createReadStream('form.html').pipe(res);
   }
   else if (req.method == 'POST') {
      const contentType = req.headers['content-type'];
      console.log('content type : ', contentType);

      // contentType : application/x-www-form-urlencoded 비교
      if (contentType.search('application/x-www-form-urlencoded') >= 0) {
         handlePostReqeust(req, res);
      }
      else {
         res.statusCode = 400;
         res.end();
      }
   }
});

function handlePostReqeust(req, res) {
   let body = '';

   req.on('data', (chunk) => {
      console.log('data event : ' + chunk.length);
      body += chunk;
   });
   req.on('end', () => {
      console.log('end : ', body);

      // 바디 파싱, 퍼센트 인코딩 자동
      const parsed = query.parse(body);
      const title = parsed.title;
      const director = parsed.director;
      console.log(`title : ${title} - director : ${director}`)
      
      console.log('parsed :', parsed);
      // JSON 형태로 출력
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(parsed));
   });
}

server.listen(3000);
console.log('Server is running on 3000');