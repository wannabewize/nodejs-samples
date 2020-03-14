// desctructuring in Object

const counting = { one: '일', two: '이', three: '삼', four: '사'};
const one = counting.one;

const {two, three} = counting;
console.log(`two : ${two}, three : ${three}`);

// 없는 원소 접근
const {four, nine} = counting;
console.log(`four : ${four}, nine : ${nine}`);
