
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

var rooms = ['room1', 'room2'];
function getRoom(roomId) {
    for(var i = 0 ; i < rooms.length ; i++) {
        const room = rooms[i];
        if ( room == roomId ) {
            return room;
        }
    }
    return null;
}

// Socket.io 서버
var io = require('socket.io')(server);
io.on('connection', socket => {
    // 연결된 사용자와 채팅방 정보
    var user;
    var room;

    // 개별 클라이언트에 환영 메세지
    socket.emit('notice', {user: 'Admin', message: 'Welcome to Socket.IO Chat-Service'});

    socket.on('chatRooms', function () {
        socket.emit('chatRoomsResult', rooms);
    });

    // 채팅방 입장
    socket.on('joinRoom', function (info) {
        user = info.user;
        // 기존 룸에서 나가기
        if ( room ) {
            socket.leave(room);
            room = null;
        }

        // 채팅방 얻어오기
        const roomId = info.room;
        room = getRoom(roomId);

        // 채팅방 입장
        if ( room ) {
            socket.join(room);
            console.log('user ', user, 'join room:', room);
            io.to(room).emit('joinRoomResult', {user:user, room:room})
        }
        else {
            socket.emit('joinRoomResult', {user:user, room:null});
        }
    });

    // 클라이언트가 보낸 메세지 이벤트
    socket.on('message', function(data) {
        console.log('client message :', data);

        const text = data.message;

        console.log('[' + room + ']', user, '>>', text);
        if ( user && text ) {
            io.to(room).emit('messageReceive', {user:user, message:text})
        }
    });
});
