// 함수
const m = require('./complex_module');
m.sayGoodMorning();

// 함수
const { sayGoodMorning } = require('./complex_module');
sayGoodMorning();

// 객체
const you = require('./complex_module').student;
you.study();

// 객체와 값
const { thisYear, student } = require('./complex_module');
student.study();
console.log('this year : ', thisYear);

// 클래스
const ClassDef = require('./complex_module').Bird;
const sparrow = new ClassDef();
sparrow.sing();

// 클래스
const { Bird } = require('./complex_module');
const penguin = new Bird();
penguin.sing();
