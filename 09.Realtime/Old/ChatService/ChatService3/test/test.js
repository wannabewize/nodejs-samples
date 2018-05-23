const should = require('should');

const Room = require('../Chat.js').Room;
const Message = require('../Chat.js').Message;
const Chat = require('../Chat.js').Chat;


describe('Message', function() {
    it('message read', function() {
        const user = '쯔위';
        // 설현, 쯔위가 채팅방에 있고 메세지를 보낸다
        const message = new Message('설현', 'hello', ['설현','쯔위']);
        // 쯔위는 아직 읽지 않았다
        (message.isUnreadFor('쯔위')).should.be.true('쯔위는 채팅방에 있지만 아직 읽지 않았다');
        (message.isRead(user)).should.be.false('쯔위가 아직 읽지 않았다');

        (message.isUnreadFor('아이유')).should.be.false('아이유는 채팅방에 없다.');

        // 쯔위가 메세지 읽기
        const ret = message.readMessage(user);
        ret.should.be.true('쯔위가 메세지를 읽었다');
        // 쯔위는 메세지를 읽었다.
        (message.isRead(user)).should.be.true('이제 쯔위가 읽었다');
        (message.isUnreadFor('아이유')).should.be.false('아이유는 채팅방에 없다.');
    });
});

describe('Room', function() {
    it('Participants', function() {
        const room = new Room('iu', 'room1');
        room.should.have.property('creator', 'iu');

        (room.getParticipants()).should.containDeep(['iu']);
        room.addParticipant('ty');

        (room.getParticipants()).should.containDeep(['iu', 'ty']);
    });

    it('Before join message', function() {
        const room = new Room('iu', 'room1');
        room.addMessage('iu', 'hello');

        room.addParticipant('ty');
        // ty는 채팅방 입장 전이므로 읽지 않은 메세지는 없다
        (room.getUnreadMessage('ty')).should.have.length(0);
    });

    it('Unread Message', function() {
        // 아이유가 만든 채팅방에 태연이 들어왔다
        const room = new Room('iu', 'room1');
        room.addParticipant('ty');

        // 아이유가 메세지를 보냈다.
        room.addMessage('iu', '잘 지내니');

        // ty가 채팅방 입장 후에 보낸 메세지는 읽지 않은 메세지로 기록된다
        (room.getUnreadMessage('ty')).should.have.length(1);

        // ty가 메세지를 모두 읽었으니 남은 메세지는 0이어야 한다
        (room.getUnreadMessage('ty')).should.have.length(0);
    });
});

describe('Chat', function() {
    it('Create Chat room', function() {
		const room = new Room('iu', 'room1');
        Chat.addRoom(room);

        const room2 = Chat.getRoom('room1');
        should.exist(room2);

        room.should.be.equal(room2);

        const room3 = Chat.getRoom('room2');
        should.not.exist(room3);
    });
});





