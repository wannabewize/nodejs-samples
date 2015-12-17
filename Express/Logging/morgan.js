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
   // 정수형
   var r = Math.round(Math.random() * 4);
   console.log(r);
   switch (r) {
      case 0:
         // Not finish
         res.write('Message');
         break;
      case 1:
         res.sendStatus(400);
         break;
      case 2:
         res.redirect('http://google.com');
         break;
      default:
         res.status(200).send('Express');
   }
}
