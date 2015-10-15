var express = require('express');
var app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000');
});

app.get('/download', function (req, res) {
   res.download('./images/baseball.png');
});

app.get('/json', function(req, res) {
   res.json({title:'JSON Response', message:'It Works Well!'});
});

app.get('/redirect', function (req, res) {
   res.redirect('http://google.com');
});

app.get('/status', function (req, res) {
   res.sendStatus(404);
});