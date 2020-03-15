/**
 * 메세지 바디 분석
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.listen(3000);

// urlencoded 바디파서.
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  // title 의 값을 콘솔에 출력
  const title = req.body.title;
  const message = req.body.message;
  
  console.log("title : " + title);  
  console.log("message : " + message);

  if ( title && message ) {
     res.send({result:'Success', title:title, message:message});
  }
  else {
     res.status(400).send({result:'Failures', message:'Can not get title, message from body'});
  }
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/urlencoded_index.html');
});

