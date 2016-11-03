console.log('== Function Export');
const greeting = require('./function_module.js');
greeting.goodMorning();
greeting.goodNight('IU');
try{
   greeting.goodAfternoon();   
}
catch (err) {
   console.log('export하지 않은 함수는 사용 불가');
}


console.log('== ClassDef Export');
const Bus = require('./classdef_module.js').Bus;
const bus = new Bus();
bus.take();

const metro = new (require('./classdef_module').Metro)();
metro.ride();

console.log('== Class Export');
// .js는 생략 가능
const Exercise = require('./class_module');
const exercise = new Exercise();

exercise.pushup();
exercise.run();

console.log('== Object Export');
const you  = require('./object_module.js');
you.study();
you.study();

// 모듈은 캐쉬됨
const him = require('./object_module.js');
him.study();

console.log(module.cache);

// ES6 - class
const  Singer = require('./class_module_es6.js');
const singer = new Singer('IU');
singer.sing();
singer.dance();
