var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Person = function() {
};

util.inherits(Person, EventEmitter);

var p = new Person();

p.on('hello', function() {
	console.log('Fine, Thank you and you?');
});

p.emit('hello');
