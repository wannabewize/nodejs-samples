/**
 * 이벤트를 다루는 타입 작성하기. EventEmitter 상속한다.
 */

// 생성자 함수
function Person(name){
    this.name = name
};

// 상속
const util = require('util');
const EventEmitter = require('events').EventEmitter;
util.inherits(Person, EventEmitter);

const p = new Person('IU');
p.on('howAreYou', () => {
    console.log('How are you? ', this.name)
});

// 이벤트 핸들러가 정의된 이벤트
console.log('howAreYou 이벤트 발생');
const ret1 = p.emit('howAreYou');
console.log('이벤트 발생 결과 : ', ret1);

// 이벤트 핸들러가 없는 이벤트
console.log('WTH 이벤트 발생');
const ret2 = p.emit('WTH');
console.log('이벤트 발생 결과 : ', ret2);