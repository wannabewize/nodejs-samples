// TypeError: Assignment to constant variable.
// 상수
const val1 = 10;
// val1 = 20;

// val1++;


// 변수
let val2 = 10;
val2 = 20;

console.log(val2);


// Const - 객체 타입인 경우 속성 변경 가능
const array1 = [1, 2, 3];
array1.push(4);
console.log(array1);

// 새로운 객체 대입은 불가능
// array1 = ['one', 'two', 'three'];
// TypeError: Assignment to constant variable.

const obj1 = {num: 1, kor: '일'};
obj1.eng = 'one';

console.log(obj1);