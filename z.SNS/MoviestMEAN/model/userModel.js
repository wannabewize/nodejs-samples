var mongoose  = require('mongoose');

var db = mongoose.connection;
db.on('error', function(err) {
	console.log('Error : ', err);
});
db.once('open', function() {
	console.log('DB Opened');
});

var UserSchema = mongoose.Schema({
	id : String,
	name : String
});

var User = mongoose.model('User', UserSchema);

User.findOrCreate = function(profile, accessToken, callback) {
	console.log('find or crate one : ', profile, accessToken);

	// 사용자 일단 검색
	User.findOne({id:profile.id}).then(function(doc){
		console.log('Find One : ', doc);
		// 검색된 사용자가 있으면
		if ( doc ) {
			callback(null, {user:'IU'});
			return;
		}

		var userInfo = { id : profile.id, name : profile.displayName};
		console.log('register user : ', userInfo);

		// 검색된 사용자가 없으면 새로 생성
		User.create(userInfo).then(function(doc){
			callback(null, {id:profile.id});
		}, function(err){
			callback(err, null);
		});
	}, function(err){
		console.log('Find User Error : ', err);
		callback(err, null);
	});
};

module.exports = User;



