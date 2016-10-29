/**
 * util 모듈의 inspect 예제
 */

const util = require('util');

const obj = { prop1 : 'value1' }

obj.depth = { prop1 : 'value' }

obj.depth.prop2 = { name : 'value' }

obj.sayHello = () => { console.log('Hello'); }

const inspected = util.inspect(obj, {maxArrayLength:2, depth:1});
console.log(inspected);