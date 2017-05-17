const express = require('express');
const app = express();

// 정적 파일 서비스
app.use(express.static(__dirname + '/public'));

// 라이브러리 요청
app.use('/lib', express.static('./node_modules'));

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

// index.html
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);