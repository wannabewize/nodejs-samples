/**
 * 객체 단위의 모듈
 */
var student = {
    hour : 0,
    study : function() {
       this.hour++;
       console.log(this.hour + '시간째 공부 중');
    }
 };
 
 exports.student = student;
 
 exports.singer = {
    hour : 0,
    sing : function() {
       this.hour++;
       console.log(this.hour + '시간째 노래 중');
    }   
 };


 /**
 * 함수 단위의 모듈
*/

// 함수 별도 정의 후 exports
function goodMorning() {
	console.log('Good Mornring!');
}

exports.goodMorning = goodMorning;

// module은 생략 가능, exports로 직접 함수 작성, Arrow Function
exports.goodNight = (who) => {
   console.log('Good Afternoon, ' + who);
}

// export하지 않은 함수는 사용 불가능
function goodAfternoon() {
   console.log('goodAfternoon');
}

class Bird {
    sing() {
       console.log('Bird sing');
    }
 }
 
 exports.Bird = Bird;
 
 // exports와 클래스 선언을 동시에
 exports.Cat = class {
    constructor(name) {
       this.name = name;
    }
    sleep() {
       console.log(`cat ${this.name} sleeps`);
    }
 };

 /**
 * 클래스 정의 모듈 사용하기
 */

// 모듈에 작성한 타입 이름으로 require
const Bird = require('./class_module').Bird;

let bird = new Bird;
bird.sing();

const Cat = require('./class_module').Cat;
let cat = new Cat('고양씨');
cat.sleep();