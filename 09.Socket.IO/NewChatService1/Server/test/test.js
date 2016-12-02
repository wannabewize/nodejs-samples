const should = require('should');

const Room = require('../Chat.js').Room;
const Message = require('../Chat.js').Message;
const Chat = require('../Chat.js').Chat;


describe('Message', function() {
    it('message read', function() {
        const message = new Message('설현', 'hello');
        const user = '쯔위';
        // 쯔위는 읽지 않은 상태
        (message.isReceived(user)).should.be.false('쯔위가 아직 읽지 않았다');
        // 쯔위가 메세지 읽기
        message.readMessage(user);
        // 쯔위는 메세지를 읽었다.
        (message.isReceived(user)).should.be.true('이제 쯔위가 읽었다');
    });
});

describe('Room', function() {
    const room = new Room('iu', 'room1');
    it('Participants', function() {
        room.should.have.property('creator', 'iu');

        (room.getParticipants()).should.containDeep(['iu']);
        room.addParticipant('ty');

        (room.getParticipants()).should.containDeep(['iu', 'ty']);
    });

    it('Unread Message', function() {
        (room.getUnreadMessage('ty')).should.have.length(0);

        room.addMessage('iu', '안녕');

        (room.getUnreadMessage('ty')).should.have.length(1);

        (room.getUnreadMessage('ty')).should.have.length(0, 'ty가 메세지를 읽었으니 0이어야 한다');
    });
});

describe('Chat', function() {
    it('Create Chat room', function() {
		const room = Chat.createRoom('iu', 'room1');

        should.exist(room);
		// room.should.be.exist(); // TODO

        const room2 = Chat.getRoom('room1');
        should.exist(room2);

        room.should.be.equal(room2);

        const room3 = Chat.getRoom('room2');
        should.not.exist(room3);
    });
});





