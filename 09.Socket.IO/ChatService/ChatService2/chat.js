class Room {
    constructor(user, name) {
        this.creator = user;
        this.name = name;
        this.messages = [];
        this.participants = [user];
        this.created = new Date();
    }

    addParticipant(user) {
        if ( this.participants.indexOf(user) < 0 ) {
            this.participants.push(user);
        }
        else {
            console.log(user + '는 이미 ' + this.name + '에 참여함');
        }
    }

    getParticipants() {
        return this.participants;
    }

    addMessage(user, message) {
        const item = new Message(user, message, this.participants);
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
            if ( message.isUnreadFor(user) ) {
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
    constructor(sender, message, participants) {
        this.sender = sender;
        this.message = message;
        this.logs = [];
        this.messageId = -1;
        // 채팅방 참여자를 기록
        for(var i = 0 ; i < participants.length ; i++) {
            const user = participants[i];
            if ( sender != user )
                this.logs.push({user:user, date:false});
            else
                this.logs.push({user:user, date:new Date()});
        }
    }

    getUserLog(user) {
        for(var i = 0; i < this.logs.length ; i++) {
            const log = this.logs[i];
            if ( log.user == user )
                return log;
        }
        return null;
    }

    // 유저가 메세지 읽은 것을 기록
    readMessage(user) {
        const log = this.getUserLog(user);
        if ( log ) {
            log.date = new Date();
            return true;
        }
        else {
            return false;
        }
    }

    isUnreadFor(user) {
        const log = this.getUserLog(user);
        if ( ! log ) {
            return false;
        }

        // 읽은 날짜가 기록됐으면
        if ( log.date ) {
            return false;
        }

        return true;
    }

    // 유저가 메세지를 읽었는지 확인
    isRead(user) {
        const log = this.getUserLog(user);
        if ( ! log ) {
            return false;
        }

        // 읽은 날짜가 기록됐으면
        if ( log.date ) {
            return true;
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
};

Chat.getRoom = function(name) {
    return Chat.rooms[name];
};

Chat.getRoomList = function() {
    var rooms = [];
    for(var name in Chat.rooms) {
        rooms.push(name);
    }
    return rooms;
};

module.exports.Chat = Chat;
module.exports.Room = Room;
module.exports.Message = Message;