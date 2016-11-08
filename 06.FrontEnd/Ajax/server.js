const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// 정적 파일 서비스
app.use('/image', express.static(__dirname + '/../../Resources/images'));
// js 파일
app.use('/lib', express.static(__dirname + '/public/bower_components'));

app.use(bodyParser.urlencoded({extended : false}));

const data = [
	{title:'야구', image:'image/baseball.png'},
	{title:'농구', image:'image/basketball.png'},
	{title:'축구', image:'image/football.png'}	
];

app.get('/items', (req, res) => {
   const obj = {
      count : data.length,
      data : data
   };
   res.send(obj);
});

app.put('/items', (req, res) => {
   console.log('put request');
   console.log('request body :', req.body);
   res.send(data);
});

// index.html
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);