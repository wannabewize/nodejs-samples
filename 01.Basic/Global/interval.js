'use strict'
/**
 * 타이머의 interval 예제
 */

// Interval Sample
var count = 5;

function sayHello(who) {
   console.log('Hello', who);   

   // count 번 실행 후 반복 종료
   if ( --count <= 0 )
      clearInterval(repeat);
}

console.log('5번 실행되고 멈춥니다.');
const repeat = setInterval(sayHello, 1000, 'Friend');