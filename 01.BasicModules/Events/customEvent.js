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



//
// Error 상황 : Event Emitter가 아닌 객체에 이벤트 등록과 발생(emit) 시도
//

class Actor {    
    constructor(name) {
        this.name = name;
    }
}

const johansson = new Actor('Scarlett Johansson');
johansson.on('act', () => {
    console.log('Act Event!');
});
johansson.emit('act');