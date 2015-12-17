// $ NODE_ENV=development node env
var express = require('express');
var app = express();
app.listen(3000);

console.log('env : ', app.get('env'));

app.use(function (req, res, next) {
   var err = new Error('Error Message');
   err.code = 100;
   next(err);
});

if (app.get('env') === 'development') {
   app.use(function (err, req, res, next) {
      res.end(err.stack);
      console.error(err.stack);
   });
}
else {
   app.use(function (err, req, res, next) {
      console.log('code : ', err.code);
      res.status(err.code || 500);
      console.log('잠시 후 다시 시도해주세요');
      res.end('잠시 후 다시 시도해주세요');
   });
}


/*
try {
   throw new Error('Error!');
}
catch ( err  ) {
   if ( app.get('env') == 'development' ) {
      console.error('Error', err.stack);
   }
   else {
      console.log('잠시후 다시 시도해주세요');
   }
}
*/