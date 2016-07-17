const express = require('express');
const http = require('http');

const app = express();

app.use(express.static('./bower_components'));
const server = http.createServer(app);
server.listen(3000);

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

var io = require('socket.io')(server);
io.on('connection', function(socket){
   console.log('클라이언트 접속');

   socket.on('message', (data) => {
      console.log('message from client : ', data['message']);
   socket.emit('echo', data);
});

   socket.on('disconnect', () => {
      console.log('Disconnected');
});
});