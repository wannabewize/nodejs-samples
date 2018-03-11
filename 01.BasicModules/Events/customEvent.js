/**
 * Class, extends 를 이용해서 EventEmitter 자식 클래스로 만들기
 */
const event = require('events');
const util = require('util');

const EventEmitter = event.EventEmitter;

class Person extends EventEmitter {    
    // Person 생성자
    constructor(name) {
        super();
        this.name = name;
    }
};

const p = new Person('IU');

// howAreYou 이벤트 리스터 등록
p.on('howAreYou', () => {
    console.log('How are you? ', this.name)
});

// 이벤트 리스터가 등록된 이벤트 발생시키기
console.log('howAreYou 이벤트 발생');
const ret1 = p.emit('howAreYou');
console.log('이벤트 발생 결과 : ', ret1);

// 이벤트 핸들러가 등록되지 않은 이벤트
console.log('WTH 이벤트 발생');
const ret2 = p.emit('wth');
console.log('이벤트 발생 결과 : ', ret2);