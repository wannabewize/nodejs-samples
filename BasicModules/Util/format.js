const util = require('util');

console.log('== Format String ==');

// Number
const str1 = util.format('%d + %d = %d', 1, 2, (1+2));
console.log(str1);

// JSON Format
const obj = { name:'IU', job:'singer' };
const str2 = util.format('%j', obj);
console.log(str2);

// String
const str3 = util.format('%s %s', 'Hello', 'World');
console.log(str3);

const str4 = util.format(1, 2, 3);
console.log(str4);