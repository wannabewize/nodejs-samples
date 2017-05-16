
// http, express 서버
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

server.listen(3000, err => {
    console.log('Server is running @ 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


// Socket.io 서버
var io = require('socket.io')(server);
io.on('connection', socket => {
    // 연결된 사용자와 채팅방 정보
    var user;
    var room;

    // 개별 클라이언트에 환영 메세지
    socket.emit('notice', {message: 'Welcome to Socket.IO Chat-Service'});

    // 클라이언트가 보낸 메세지 이벤트
    socket.on('message', function(data) {
        console.log('client message :', data);

        const text = data.message;

        console.log('>>', text);
        if ( text ) {
            io.emit('messageReceive', {message:text})
        }
    });
});
