/**
 * 메세지 바디
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.listen(3000);

// urlencoded/json 동시 사용 가능
// urlencoded 바디파서.
// app.use(bodyParser.urlencoded({ extended: false }))
// application/json 바디파터
app.use(bodyParser.json());

app.post('/', function (req, res) {
  // title 의 값을 콘솔에 출력
  const title = req.body.title;
  const message = req.body.message;
  
  console.log("title : " + title);  
  console.log("message : " + message);
  
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(req.body))  
});

