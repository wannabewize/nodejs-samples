/**
 * 이벤트 발생시키기
 */

const event = require('events');
const EventEmitter = event.EventEmitter;

// EventEmitter 객체 생성
const obj = new EventEmitter();


// howAreYou 이벤트와 이벤트 핸들러 등록
obj.on('howAreYou', () => {
    console.log('Fine thank you, and you?')
});

// 이벤트 발생시키기
obj.emit('howAreYou');
obj.emit('howAreYou');


obj.once('hello', () => {
    console.log('Hello Node.js');
});

// once는 1번만 발생
obj.emit('hello');
obj.emit('hello');
