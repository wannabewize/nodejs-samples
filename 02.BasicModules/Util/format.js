const util = require('util');

console.log('== Format String ==');

// Number : %d
const strD = util.format('%d + %d = %d', 1, 2, (1+2));
console.log('%%d :', strD);

// Integer : %i
const strI = util.format('%i', 3.14);
console.log('%%i :', strI );

// JSON Format : %j
const obj = { name:'IU', job:'singer' };
const strJ = util.format('%j', obj);
console.log('%%j :', strJ);

// String
const strS = util.format('%s %s', 'Hello', 'World');
console.log('%%s :',strS);

const str4 = util.format(1, 2, 3);
console.log('format(1, 2, 3) :', str4);