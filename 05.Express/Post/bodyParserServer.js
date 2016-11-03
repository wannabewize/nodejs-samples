var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000);

// urlencoded 바디파서.
app.use(bodyParser.urlencoded({ extended: false }))
// application/json 바디파터
app.use(bodyParser.json());

app.post('/', function (req, res) {
  // title 의 값을 콘솔에 출력
  var title = req.body.title;
  var message = req.body.message;
  
  console.log("title : " + title);  
  console.log("message : " + message);
  
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(req.body))  
});

