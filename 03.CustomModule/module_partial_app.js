const you  = require('./object_module').student;
you.study();
you.study();

// 모듈 캐시
const me = require('./object_module').student;
me.study(); // 3시간째 공부 중


const singer = require('./object_module').singer;

singer.sing();
singer.sing();


const coder = require('./object_module2');

coder.code();
coder.code();


/**
 * 함수 단위의 커스텀 모듈 만들기/사용하기
 */

const greeting = require('./function_module');

// 모듈에 작성한 함수 호출하기
greeting.goodMorning();
greeting.goodNight('IU');

const fn1 = require('./function_module').goodMorning;
fn1();

const { goodMorning, goodNight} = require('./function_module');

goodMorning();
goodNight('Sana');


try{
   // 모듈에 작성하지 않은 함수는 사용 불가. 에러 발생
   greeting.goodAfternoon();   
}
catch (err) {
   console.log('export하지 않은 함수는 사용 불가');
}

console.log('Well Done');

