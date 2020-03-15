/**
 * 미들웨어에서 요청 분석하기
 */
const express = require('express');
const app = express();

app.use( (req, res) => {
   console.log('url :', req.url);
   console.log('path :', req.path);
   console.log('query :', req.query);
   console.log('method :', req.method);
   console.log('headers :', req.headers);

   res.send('Hello Express!');
});

app.listen(3000, () => {
   console.log('Express Server is running @ 3000');
});