var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);
server.listen(3000);

var chatrooms = [
   {name:'server', roomid:1},
   {name:'client', roomid:2},
   {name:'design', roomid:3}
];

app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/', function(req, res) {
   res.render('lounge', {chatrooms:chatrooms});
});

app.get('/chatroom/:roomid', function(req, res) {
   var roomid = req.params.roomid;
   res.render('chatroom', {roomid:roomid});
});

var io = require('socket.io');
io = io(server);