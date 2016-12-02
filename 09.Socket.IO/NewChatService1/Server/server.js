const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Chat = require('./chat').Chat;
const Room = require('./chat').Room;

server.listen(3000, err => {
    if ( err ) {
        console.error('Error :', err);
        return;
    }
    console.log('Server is running on 3000');
});

app.get('/favicon.ico');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


(function() {
    console.log('create initial chat room');
    const room = Chat.createRoom('iu', 'room1');
    room.addParticipant('ty');
})();

io.on('connection', function (socket) {
    console.log('connection from client :', socket.id);

    var room;

    socket.on('joinRoom', function(info) {
        console.log('client want to join room:', info);

        // 채팅방 얻어오기
        room = Chat.getRoom(info.room);
		socket.join(room.name);

        console.log('get chat room :', room);

        const joinResult = !(!room);
        socket.emit('joinRoomResult', {result:joinResult});
    });

    socket.on('getParticipants', function() {
        if ( room ) {
            const participants = room.getParticipants();
            socket.emit('participantsResult', {count:participants.length, data:participants});
        }
        else {
            socket.emit('participantsResult', {count:0, message:'No Chat room'});
        }
    });

    // 클라이언트의 메세지 수신 확인
    socket.on('messageReceived', function(data) {
        console.log('message received :', data);
        const messageId = data.messageId;
        const message = room.getMessage(messageId);
        const user = data.user;
        message.readMessage(user);
    });

    socket.on('unreadMessage', function(user) {
        if ( room ) {
            const messages = room.getUnreadMessage(user);
            socket.emit('unreadMessageResult', messages);
        }
    });

    socket.on('message', function(data) {
        console.log('client message :', data);

        const user = data.user;
        const text = data.message;

        console.log('[' + room.name + ']', user, '>>', text);
        if ( user && text ) {
			const message = room.addMessage(user, text);
			io.to(room.name).emit('messageResult', message)
        }
    });

    socket.on('my other event', function (data) {
        console.log(data);
    });
});