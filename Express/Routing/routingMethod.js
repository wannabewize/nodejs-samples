var express = require('express');
var app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000');
});


app.get('/', function (req, res) {
   res.send('GET request, /');
});

app.delete('/', function(req, res) {
   res.send('DELETE method');
});

app.put('/item/1', function(req, res) {
   res.send('PUT method, /item/1');
});

app.all('/all', function(req, res) {
   res.send('모든 HTTP 메소드, /all');   
});


app.patch('/item', function(req, res) {
   res.send('PATCH method, /item');
});
