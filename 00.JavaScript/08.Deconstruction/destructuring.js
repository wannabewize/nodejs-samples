// destructuring in Array
const array = ['Jan', 'Feb', 'March', 'April', 'May'];

const [first, second] = array;

console.log('one :', first);
console.log('two :', second);

// 원소 바인딩 안하기
const [, , , , fifth] = array;
console.log('fifth :', fifth);

// 범위 벗어난 원소 접근
const [, , , , , sixth] = array;
console.log('sixth :', sixth);


// desctructuring in Object

const object = { one: '일', two: '이', three: '삼', four: '사'};

const {two} = object;
console.log('two :', two);

const {one, three} = object;
console.log(`one : ${one}, three : ${three}`);

// 없는 원소 접근
const {four, nine} = object;
console.log(`four : ${four}, nine : ${nine}`);
