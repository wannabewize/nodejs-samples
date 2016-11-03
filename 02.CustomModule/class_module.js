function Exercise() {
	this.pushup = function() {
		console.log('Push up, Push up!');
	}
}

Exercise.prototype.run = function() {
	console.log('Fast, Fast');
}

// module 생략 불가
module.exports = Exercise;