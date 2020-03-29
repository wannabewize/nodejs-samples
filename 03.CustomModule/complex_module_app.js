// 함수
const m = require('./complex_module');
m.sayGoodMorning();
m.student.study();
const b = new m.Bird();

// destructuring
const { sayGoodMorning } = require('./complex_module');
sayGoodMorning();

// 객체
const you = require('./complex_module').student;
you.study();

// destructuring, 이름 변경
const { thisYear: currYear, student } = require('./complex_module');
student.study();
console.log('this year : ', currYear);

// 클래스 - 이름 변경
const ClassDef = require('./complex_module').Bird;
const sparrow = new ClassDef();
sparrow.sing();

// 클래스
const { Bird } = require('./complex_module');
const penguin = new Bird();
penguin.sing();
