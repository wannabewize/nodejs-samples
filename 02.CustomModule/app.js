console.log('== Function  Export Module');
const greeting = require('./function_module.js');
greeting.goodMorning();
greeting.goodNight('IU');
try{
   greeting.goodAfternoon();   
}
catch (err) {
   console.log('export하지 않은 함수는 사용 불가');
}


console.log('== Constructors Export Module');
const Bus = require('./constructors_module.js').Bus;
const bus = new Bus();
bus.take();

const metro = new (require('./constructors_module').Metro)();
metro.ride();

// .js는 생략 가능
const Exercise = require('./constructor_module');
const exercise = new Exercise();

exercise.pushup();
exercise.run();

console.log('== Object Export Module');
const you  = require('./object_module.js');
you.study();
you.study();

// 모듈은 캐쉬됨
const him = require('./object_module.js');
him.study();

// console.log(module.cache);

console.log('== Class Export Module');
// ES6 - class
const  Singer = require('./class_module.js');
const singer = new Singer('IU');
singer.sing();
singer.dance();
