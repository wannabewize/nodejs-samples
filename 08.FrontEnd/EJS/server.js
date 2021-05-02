/**
 * EJS 예제
 */
const express = require('express');
const app = express();

// 템플릿 엔진 설정(필수)
app.set('view engine', 'ejs');
// 템플릿 파일 위치 설정(필수)
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	// 템플릿 엔진에 데이터 전달
	res.render('page', {count: 10});
});

const data = [
	{title:'야구', image:'baseball.png'},
	{title:'농구', image:'basketball.png'},
	{title:'축구', image:'football.png'}	
];

app.get('/page/:no', (req, res) => {
	res.render('number', {num: req.params.no})
});

// 정적 파일 제공 미들웨어
app.use('/images', express.static(__dirname + '/../Resources/images'));

app.get('/sports', (req, res) => {
	res.render('sports', {title:'구기 종목', sports:data});
});

app.listen(3000);