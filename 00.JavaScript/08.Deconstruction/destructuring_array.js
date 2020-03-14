// destructuring in Array
const months = ['Jan', 'Feb', 'March', 'April', 'May'];

const [first, second] = months;

console.log('one :', first);
console.log('two :', second);

// 나머지 원소 바인딩
const [jan, feb, ...afterFeb] = months;
console.log('after Feb :', afterFeb);

// 원소 바인딩 안하기
const [ , , third] = months;
console.log('third :', third);

// 범위 벗어난 원소 접근 - 6번째
const [, , , , , sixth] = months;
console.log('sixth :', sixth);