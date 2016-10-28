/**
 * 타이머 예제
 */

// Timer Sample
function sayHello() {
   console.log('Hello World');
}

console.log('== Timer Example.');
setTimeout(sayHello, 3 * 1000);

// 타이머 취소
const t = setTimeout(sayHello, 10 * 1000);
clearTimeout(t);


// Inline 방식으로 작성
setTimeout((arg) => {
      console.log("Inline 방식으로 작성한 타이머 실행. 파라미터 :", arg);
}, 2 * 1000, "Timer Example");