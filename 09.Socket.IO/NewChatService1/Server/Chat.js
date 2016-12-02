class Room {
    constructor(user, name) {
        this.creator = user;
        this.name = name;
        this.messages = [];
        this.participants = [user];
        this.created = new Date();
    }

    addParticipant(user) {
        this.participants.push(user);
    }

    getParticipants() {
        return this.participants;
    }

    addMessage(user, message) {
        const item = new Message(user, message);
		item.messageId = this.messages.length;
        this.messages.push(item);
        return item;
    }

    getMessage(messageId) {
        // 인덱스를 message id로 사용
        return this.messages[messageId];
    }

    // 사용자가 읽지 않은 메세지만 전송
    getUnreadMessage(user) {
        var result = [];
        for(var i = 0 ; i < this.messages.length ; i++ ) {
            const message = this.messages[i];

            // 읽지 않은 메세지라면
            if ( ! message.isReceived(user) ) {
                // 결과 배열에 저장
                result.push(message);

                // 읽었다고 기록
                message.readMessage(user);
            }
        }
        return result;
    }
}

class Message {
    constructor(sender, message) {
        this.sender = sender;
        this.message = message;
        this.logs = [];
        this.messageId = -1;
    }

    // 유저가 메세지 읽은 것을 기록
    readMessage(user) {
        const info = {user: user, data:new Date()};
        this.logs.push(info);
    }

    // 유저가 메세지를 읽었는지 확인
    isReceived(user) {
        for(var i = 0 ; i < this.logs.length ; i++) {
            const log = this.logs[i];
            if ( log.user == user ) {
                return true;
            }
        }
        return false;
    }
}



class Chat {
}

Chat.rooms = [];

Chat.createRoom = function(user, name) {
    const room = new Room(user, name);
    Chat.rooms[name] = room;
    return room;
}

Chat.getRoom = function(name) {
    return Chat.rooms[name];
}

module.exports.Chat = Chat;
module.exports.Room = Room;
module.exports.Message = Message;