/**
 * 객체 단위의 모듈 사용하기
 */

const me = require('./object_module');
me.code();
me.code();


// destructuring
const {code} = require('./object_module');
code();



const you = require('./object_module2');
you.study()

you.study2();