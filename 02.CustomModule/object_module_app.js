/**
 * 객체 단위의 모듈 사용하기
 */

const you  = require('./object_module').student;
you.study();
you.study();

// 모듈 캐시
const me = require('./object_module').student;
me.study(); // 3시간째 공부 중


const singer = require('./object_module').singer;

singer.sing();
singer.sing();


const coder = require('./object_module2');

coder.code();
coder.code();
