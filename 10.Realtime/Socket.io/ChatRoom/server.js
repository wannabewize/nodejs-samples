
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
const io = require('socket.io')(server);
io.on('connection', socket => {
    // 연결된 사용자와 채팅방 정보
    let user;
    let room;

    // 채팅방 입장
    socket.on('joinRoom', (info) => {
        user = info.user;
        // 기존 룸에서 나가기 - 안나가면 기존 채팅방 메세지가 그대로 전달
        if ( room ) {
            socket.leave(room);
            room = null;
        }

        // 채팅방 얻어오기
        room = info.room;
        socket.join(room);
        
        console.log('user ', user, 'join room:', room);
        io.to(room).emit('joinRoomResult', {user:user, room:room})
    });

    // 클라이언트가 보낸 메세지 이벤트
    socket.on('message', (data) => {
        console.log('client message :', data);

        const text = data.message;

        console.log('[' + room + ']', user, '>>', text);
        if ( user && text ) {
            io.to(room).emit('messageReceive', {user:user, message:text})
        }
    });
});
