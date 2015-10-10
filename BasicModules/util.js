var util = require('util');

console.log('== Format String ==');

// Number
var str1 = util.format('%d + %d = %d', 1, 2, (1+2));
console.log(str1);

// JSON Format
var obj = { name:'IU', job:'singer' };
var str2 = util.format('%j', obj);
console.log(str2);

// String
var str3 = util.format('%s %s', 'Hello', 'World');
console.log(str3);

var str4 = util.format(1, 2, 3);
console.log(str4);