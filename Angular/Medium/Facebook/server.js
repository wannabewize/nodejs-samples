var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(err) {
    console.log('server is running on 3000');
});