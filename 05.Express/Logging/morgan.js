/**
 *  난수를 이용한 다양한 응답 메세지와 로그
*/
var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));

app.use(handler);

// Random Response
app.listen(3000, function(err) {
   console.log('Server is listening @3000');
});

function handler(req, res) {
   res.send('Morgan Example');
}
