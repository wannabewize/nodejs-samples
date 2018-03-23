const http = require('http');
const query = require('querystring');
const fs = require('fs');
const urlencode = require('urlencode');

const server = http.createServer( (req, res) =>  {
    console.log('req.method :', req.method);
    
   if (req.method == 'POST') {
      const contentType = req.headers['content-type'];
      console.log('content type : ', contentType);

      // contentType : application/x-www-form-urlencoded 비교
      if ( contentType.search('application/x-www-form-urlencoded') >= 0 ) {
         handlePostReqeust(req, res);
      }
      else {
         res.statusCode = 400;
         res.end();
      }
   }
   // get이면 폼 목록 출력
   else {
      fs.createReadStream('urlencoded_form.html').pipe(res);
   }
});

function handlePostReqeust(req, res) {
   var buffer = '';

   req.on('data', function (chunk) {
      console.log('data event : ' + chunk.length);
      buffer += chunk;
   });
   req.on('end', function () {
      console.log('end : ' + buffer);
      console.log('decode :', urlencode.decode(buffer, 'utf-8'));

      // 바디 파싱
      var parsed = query.parse(buffer);
      console.log('decoded : ', urlencode.decode(parsed.textarea));
      // JSON 형태로 출력      
      res.end(JSON.stringify(parsed));
   });
}

server.listen(3000);
console.log('Server is running on 3000');