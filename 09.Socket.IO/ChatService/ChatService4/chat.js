// Mongoose Schema : http://mongoosejs.com/docs/schematypes.html
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/chat-service');
const ObjectId = mongoose.Schema.Types.ObjectId;

// 메세지 수신 기록
const LogSchema = new mongoose.Schema({
	user : String,
	date : Date
});

const Log = mongoose.model('Log', LogSchema);

// 개별 메세지. 보낸 사람(sender), 메세지, 메세지 수신 기록
const MessageSchema = new mongoose.Schema({
	sender : String,
	message : String,
	logs : [LogSchema]
});

MessageSchema.methods.getUserLog = function(user) {
	for(let i = 0 ; i < this.logs.length ; i++) {
		const log = this.logs[i];
		if ( log.user == user ) {
			return this;
		}
	}
	return null;
};

MessageSchema.methods.readMessage = function(user) {
	const log = this.getUserLog(user);
	if ( log ) {
		log.date = new Date();
		return log.save();
	}

	return new Promise((fullfill, reject) => {
		reject("User doesn't participate this message");
	});
};

MessageSchema.methods.isRead = function(user) {
	const log = this.getUserLog(user);
	if ( ! log ) {
		return false;
	}

	if ( log.date ) return true;
	return false;
};

MessageSchema.methods.isUnreadFor = function(user) {
	const log = this.getUserLog(user);
	if ( ! log ) {
		return false;
	}

	// 읽은 날짜가 기록됐으면
	if ( log.date ) {
		return false;
	}

	return true;
};

MessageSchema.statics.createMessage = function(sender, text, participants) {
    const message = new Message();
    message.sender = sender;
    message.message = text;

    for(let i = 0 ; i < participants.length ; i++) {
        const user = participants[i];
        const log = new Log();
        log.user = user;
        this.logs.push(log);
    }

    return message.save();
};

const Message = mongoose.model('Message', MessageSchema);

// 채팅방. 채팅방 이름, 생성자, 채팅 방 내 메세지, 채팅 방 참여자
const RoomSchema = new mongoose.Schema({
    name : String,
    creator : String,
    messages : [MessageSchema],
    created : Date,
	participants : [String]
});

// Method in Schema. http://mongoosejs.com/docs/guide.html#methods

RoomSchema.methods.getParticipants = function() {
	return this.participants;
};

RoomSchema.methods.addParticipant = function(user) {
	if ( this.participants.indexOf(user) < 0 ) {
		this.participants.push(user);
		const ret = this.save();
		console.log('save result : ', ret);
		return this.save();
	}
	else {
		console.log(user + '는 이미 ' + this.name + '에 참여함');
		return new Promise((fulfill, reject) => {
			fulfill(this);
		})
	}
};

RoomSchema.methods.getUnreadMessage = function(user) {
	return new Promise((fulfill, reject) => {
		var result = [];
		var promises = [];
		for(let i = 0 ; i < this.messages.length ; i++) {
			const message = this.messages[i];

			if ( message.isUnreadFor(user) ) {
				result.push(message);
				promises.push(message.readMessage(user));
			}
		}

		Promise.all(promises).then( result => {
			console.log('unread message success :', result);
			fulfill(result);
		}, error => {
			console.log('ger unread message faulure :', error);
			reject(error);
		});
	});
};

RoomSchema.methods.getMessage = function(messageId) {
	return Message.find({_id:messageId});
};

RoomSchema.methods.addMessage = function(user, message) {
	Message.createMessage(user, message, this.participants).then( (message) => {
		console.log('add Message success :', message);
		this.messages.push(message._id);
		return this.save();
	}, (error) => {
		console.error('add message failure :', error);
		return new Promise((fullfill, reject) => {
			reject(error);
		});
	});
};

const Room = mongoose.model('Room', RoomSchema);

class Chat {
}

Chat.rooms = [];

Chat.addRoom = function(room) {
	Chat.rooms[room.name] = room;
	return room.save();
}

Chat.createRoom = function(user, name) {
	const room = new Room();
	room.user = user;
	room.name = name;
	room.participants = [user];
	Chat.rooms[name] = room;
	return room.save();
};

Chat.getRoom = function(name) {
	return Room.findOne({name:name})
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