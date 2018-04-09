/**
 * JSON 응답
 */

// HTTP 모듈
const http = require('http');
http.createServer((req, res) => {
   var data = {
      name: '태연',
      job: 'Singer'
   };

   res.setHeader('Content-type', 'application/json');
   res.write(JSON.stringify(data));
   res.end();
}).listen(3000);


// Express
const express = require('express');
const app = express();
app.listen(3001);

app.use((req, res) => {
   var data = {
      name: '태연',
      job: 'Singer'
   };
   // Express의 send는 자동으로 컨텐트에 맞게 전송
   // res.send(data);
   res.json(data);
});