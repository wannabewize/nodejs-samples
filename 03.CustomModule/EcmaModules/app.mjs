import {Subject} from "./myModule.mjs";
console.log('subject :', Subject);

import {add, minus} from './myModule.mjs';

const ret = add(1, 2);
console.log('1 + 2 =', ret);

const ret2 = minus(3, 4);
console.log('3 - 4 =', ret2);

import {MyClass} from './myModule.mjs';
const obj = new MyClass();
const ret3 = obj.multiply(5, 6);
console.log('5 * 6 =', ret3);