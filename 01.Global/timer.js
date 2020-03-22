/**
 * 타이머 예제
 */

// Timer Sample
function sayHello() {
    console.log('Hello World');
}

console.log('== Timer Example.');
console.log('3초뒤에 "Hello World"가 출력됩니다.');
setTimeout(sayHello, 3 * 1000);

setTimeout(() => {
    console.log('Hello World');
}, 6 * 1000);

// Arrow Function과 파라미터 전달
setTimeout((arg1, arg2) => {
    var result = arg1 + arg2;
    console.log('Arrow Function, parameter를 사용한 타이머 예제');
    console.log(`${arg1} + ${arg2} = ${result}`)
}, 9 * 1000, 1, 2);

// 타이머 취소
function cancelledFunction() {
    console.log('이 함수는 setTimeout으로 실행되지만 바로 취소돼서 실행되지 않습니다.');
}
const t = setTimeout(cancelledFunction, 2000);
console.log(t);
clearTimeout(t);

