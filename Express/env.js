// $ NODE_ENV=development node env
var express = require('express');
var app = express();
app.listen(3000);

app.use(function(req, res, next) {
   next(new Error('Error!'));
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
     res.end(err.stack);
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end('잠시 후 다시 시도해주세요');
});

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