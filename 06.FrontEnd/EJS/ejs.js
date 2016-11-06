/**
 * EJS 예제
 */
const express = require('express');
const app = express();

// 템플릿 엔진 설정(필수)
app.set('view engine', 'ejs');
// 템플릿 파일 위치 설정(필수)
app.set('views', __dirname + '/views');

app.use(function(req, res) {
	// 템플릿 엔진에 데이터 전달
	res.render('page', {count: 10});
});

app.listen(3000);