var express = require('express');
var app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000');
});

app.get('/', function (req, res) {
   res.send('GET request, /');
});

app.get('/movies', function(req, res) {
   res.send('GET request, /movies');
});

// accept POST request on the homepage
app.post('/movies', function (req, res) {
   res.end('POST request, /movies');
});

// PUT request at /movies/avata
app.put('/movies/avata', function (req, res) {
   res.end('PUT request, /movies');
});

// DELETE request
app.delete('/movies/avata', function (req, res) {
   res.end('DELETE request, /movies/avata');
});