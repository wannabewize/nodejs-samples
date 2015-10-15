var express = require('express');
var app = express();

app.use(logger, reqHandler);
app.listen(3004, function(err) {
   console.log('Server is listening @3004');
});

function logger(req, res, next) {
   console.log('Method : ', req.method);
   console.log('Url : ', req.url);
   console.log('Path : ', req.path);
   console.log('Query : ', req. query);
    
   next();
}

function reqHandler(req, res) {
   res.send('Request handled');
}