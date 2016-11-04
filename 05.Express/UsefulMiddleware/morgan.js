/**
 *  morgan을 이용한 로그 기록
*/
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(handler);

app.listen(3000, function(err) {
   console.log('Server is listening @3000');
});

// 임의의 결과값
const responses = [200, 400, 404, 500, 401];

function handler(req, res) {
   const index = Math.round(Math.random() * (responses.length -1) );
   const code = responses[index];

   console.log('random :', index, 'response code :', code);

   res.sendStatus(code);
}
