/*
 * 서명된 쿠키 사용 예제 with MAC
*/

const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
// 쿠키 파서 - req.cookies 사용 가능
app.use(cookieParser('Keyboard cat'));

app.use('/favicon.ico', () => {}); // 파비콘 무시
app.use( (req, res) => {
	console.log('req.headers.cookie', req.headers.cookie);
   console.log('req.signedCookies : ', req.signedCookies);
   
   const last = req.signedCookies.last;
   console.log('Read cookie : ', last);
   
	// 최종 방문 날짜를 기록하는 last 쿠키
	const now = new Date();
   const today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
      
   res.cookie('last',today, {signed:true});
   
   res.end('last : ' + last);   
});

const port = 3000;
app.listen(port, () => {
   console.log('server is listening @' + port);
});