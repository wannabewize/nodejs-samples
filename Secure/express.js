var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);
server.listen(3000);

// For HTTPS
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

var secureServer = https.createServer(options, app);
secureServer.listen(3001);

app.get('/', function(req, res) {   
   res.send('Welcome to Secure Server. Is Secure? ' + req.secure);
});