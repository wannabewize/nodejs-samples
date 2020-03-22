/**
 * 타이머의 interval 예제
 */

// Interval Sample
const repeat = setInterval( () => {
   console.log('Hello Interval');
}, 1000);

setTimeout(() => {
   clearInterval(repeat);
}, 5000);
