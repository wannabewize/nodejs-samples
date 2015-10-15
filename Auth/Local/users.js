// User Database^^. Just use memory
var users = {
    'user' : { id:'user', username:'First User', password:'1234' }
};

exports.findOne = function(id) {
	return users[id];
}

exports.addNewUser = function(user) {
	users[user.id] = user;
}