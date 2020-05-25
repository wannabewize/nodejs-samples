var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.ws('/', function(ws, req) {
  ws.on('message', (message) => {
    console.log('received:', message);

    ws.send(message);
  });
});

app.listen(3000);