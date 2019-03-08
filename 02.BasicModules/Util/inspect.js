/**
 * util 모듈의 inspect 예제
 */

const util = require('util');

const array = [1, 2, 3, 4, 5];

console.log('array :', array);
const arrayInspected = util.inspect(array, {maxArrayLength:3});
console.log('array inspect :', arrayInspected);


const obj = {
    prop1: 'value1',
    
    prop2: { subProp2 : 'value2' },

    prop3 : {
        subProp3 : {
            subsubProp3 : 'value3'
        }
    }    
}

console.log('complex object :', obj);
const depth0 = util.inspect(obj, {depth: 0});
console.log('complex obj with depth 0 :', depth0);
const depth1 = util.inspect(obj, {depth: 1});
console.log('complex obj with depth 1 :', depth1);