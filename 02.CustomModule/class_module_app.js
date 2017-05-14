//
// ES6에 도입된 Class를 이용해서 작성한 모듈 사용
//
const  Singer = require('./class_module.js');
const singer = new Singer('IU');
singer.sing();
singer.dance();
