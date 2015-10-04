function Greeting() {
	this.howAreYou = function() {
		console.log('Fine Thank you and you?');
	}
}

Greeting.prototype.sayGoodbye = function(who) {
	console.log('Bye Bye ' + who);
}

module.exports = Greeting;