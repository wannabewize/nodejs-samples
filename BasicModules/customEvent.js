var event = require('events');
var util = require('util');

var EventEmitter = event.EventEmitter;
var Person = function(){
};

util.inherits(Person, EventEmitter);
// Prototype을 이용한 상속
// Person.prototype = new event.EventEmitter();

var p = new Person();
p.on('howAreYou', function() {
    console.log('Fine, Thank you and you?')
});


// 이벤트 핸들러가 정의된 이벤트
var ret1 = p.emit('howAreYou');
console.log('handled event result : ', ret1);
// 이벤트 핸들러가 없는 이벤트
var ret2 = p.emit('hello');
console.log('unhandled event result : ', ret2);


/**
 * 에러 이벤트 
 */
console.log('== Unhandle Error event==');

p.on('error', function(err) {
    console.log('error');
});

try {
    p.sayChinese();
}
catch (err) {
    console.log('error : ', err);
}