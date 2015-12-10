console.log('== Function Export');
var greeting = require('./greeting.js');
greeting.goodMorning();
greeting.goodNight('IU');
try{
   greeting.goodAfternoon();   
}
catch (err) {
   console.log('export하지 않은 함수는 사용 불가');
}


console.log('== ClassDef Export');
var Bus = require('./transport.js').Bus;
var bus = new Bus();
bus.take();

var metro = new (require('./transport').Metro)();
metro.ride();

console.log('== Class Export');
// .js는 생략 가능
var Exercise = require('./exercise');
var exercise = new Exercise();

exercise.pushup();
exercise.run();

console.log('== Object Export');
var you  = require('./student.js');
you.study();
you.study();

// 모듈은 캐쉬됨
var him = require('./student.js');
him.study();

console.log(module.cache);