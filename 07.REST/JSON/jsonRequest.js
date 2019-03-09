/**
 * JSON 요청 분석
 */

// HTTP 모듈로 분석
const http = require('http');
http.createServer( (req, res) => {
   var buffer = '';
   req.on('data', function(chunk) {
      buffer += chunk;
   });
   req.on('data', function() {     
      var parsed = JSON.parse(buffer);
      for(item in parsed) {
         res.write(`Property Name : ${item} Value : ${parsed[item]}\n`);
      }
      res.end('= Success =');
   });
}).listen(3000);


// Express를 이용해서 JSON 요청 분석
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('JSON 요청 분석 서비스');
})
app.post('/', (req, res) => {
   for(item in req.body) {
      res.write(`Property Name : ${item} Value : ${req.body[item]}\n`);
   }
   res.end('= Success =');
});

app.listen(3001);

