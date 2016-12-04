
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

// 채팅방 관련 모델
const Chat = require('./chat').Chat;
const Room = require('./chat').Room;

(function() {
    console.log('create initial chat room');

    // 아이유가 채팅방 room1을 만들고 설현이 채팅방에 참가
    const room1 = Chat.createRoom('아이유', 'room1');
    room1.addParticipant('설현');

    // 태연이 채팅방 room2를 만들고 아이유가 채팅방에 참가
    const room2 = Chat.createRoom('태연', 'room2');
    room2.addParticipant('아이유')

    console.log('rooms :',Chat.getRoomList());
})();

// Socket.io 서버
var io = require('socket.io')(server);
io.on('connection', socket => {
    // 연결된 사용자와 채팅방 정보
    var user;
    var room;

    // 개별 클라이언트에 환영 메세지
    socket.emit('notice', {user: 'Admin', message: 'Welcome to Socket.IO Chat-Service'});

    socket.on('chatRooms', function () {
        const rooms = Chat.getRoomList();
        socket.emit('chatRoomsResult', rooms);
    });

    // 채팅방 입장
    socket.on('joinRoom', function (info) {
        user = info.user;
        // 기존 룸에서 나가기
        if ( room ) {
            socket.leave(room.name);
            room = null;
        }

        // 채팅방 얻어오기
        const roomId = info.room;
        room = Chat.getRoom(roomId);
        console.log('Chatroom :',room);

        // 채팅방 입장
        if ( room ) {
            socket.join(room.name);
            room.addParticipant(user);
            console.log('user', user, 'join room:', room.name, ' room participants :', room.getParticipants());

            // 채팅방 참여 알림
            io.to(room.name).emit('joinRoomResult', {user:user, room:room.name})
        }
        else {
            socket.emit('joinRoomResult', {user:user, room:null});
        }
    });

    // 읽지 않은 메세지
    socket.on('unreadMessage', function(data) {
        const messages = room.getUnreadMessage(data.user);
        socket.emit('unreadMessageResult', messages);
    });

    // 클라이언트가 보낸 메세지 이벤트
    socket.on('message', function(data) {
        console.log('client message :', data);

        const text = data.message;
        const message = room.addMessage(user, text);

        console.log('[' + room.name + ']', user, '>>', text);
        if ( user && text ) {
            io.to(room.name).emit('messageReceive', message)
        }
    });

    // 클라이언트의 메세지 수신 확인
    socket.on('messageRead', function(data) {
        const messageId = data.messageId;
        const user = data.user;

        console.log(user + 'read message ', messageId);
        const message = room.getMessage(messageId);
        message.readMessage(user);
    });

});
