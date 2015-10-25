var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');

var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));
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
   r = 0;
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
