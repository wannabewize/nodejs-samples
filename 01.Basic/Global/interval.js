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

const repeat = setInterval(sayHello, 1000, 'Friend');