const express = require('express');
const app = express();
const server = require('http').Server(app);

const ioServer = require('./ioServer.js');
ioServer.attach(server);

server.listen(3000);

app.get('/favicon.ico', (req, res) => {});

app.use(express.static('./public'));

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/public/index.html');
});


