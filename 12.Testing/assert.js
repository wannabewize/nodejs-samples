var assert = require('assert');

console.log('== 참 테스트하기')
var trueValue = true;
assert(trueValue);
assert.ok(trueValue, '참 테스트');

var falseValue = false
// assert(falseValue, 'False Value'); // AssertFail


console.log('== equal 테스트');

// 값 비교
var intVal = 9;
assert.equal(intVal, 9, 'equal 9');
assert.equal(intVal, '9', 'equal "9"');
assert.deepEqual(intVal, '9', 'deepEqual "9"');
// assert.strictEqual(intVal, '9', 'strictEqual "9"'); // AssertFail

var str1 = 'Hello Node';
var str2 = 'Hello ' + 'Node';
assert.equal(str1, str2, '문자열 비교. equal');
assert.deepEqual(str1, str2, '문자열 비교. deepEqual');
assert.strictEqual(str1, str2, '문자열 비교. strictEqual');

// 객체 비교
var obj1 = { value : 0 };
var obj2 = { value : 0 };
var obj3 = { value : 1 };

assert.equal(obj1, obj1, '같은 객체');
// assert.equal(obj1, obj2, '같은 객체. equal'); // AssertFail
assert.deepEqual(obj1, obj2, '같은 값을 가진 다른 객체. deepEqual');
// assert.deepEqual(obj1, obj3, '다른 값을 가진 다른 객체. deepEqual'); // AssertFail
// assert.strictEqual(obj1, obj2, '같은 값을 가진 다른 객체. strictEqual'); // AssertFail

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

assert.equal(array1, array1, '같은 배열. equal');
// assert.equal(array1, array2, '같은 값을 가진 다른 배열');
assert.deepEqual(array1, array2, '같은 값을 가진 다른 배열. deepEqual');

var objArray1 = [{value:1}, {value:2}];
var objArray2 = [{value:1}, {value:2}];
var objArray3 = [{value:1.0}, {value:2.0}];
// assert.equal(objArray1, objArray2, '같은 값을 가진 객체 배열. equal'); // AssertFail
assert.deepEqual(objArray1, objArray2, '같은 값을 가진 객체 배열. deepEqual');
// assert.deepEqual(objArray1, objArray3, '다른 타입의 객체 배열. deepEqual'); // AssertFail

function MyClass(value) {
   this.value = value;
}

var r1 = new MyClass(10);
var r2 = new MyClass(10);

assert.deepEqual(r1, r2, 'deepEqual, Class');
// assert.strictEqual(r1, r2, 'strictEqual, Class'); // AssertFail


function task() {
   throw new Error('Error');
}

assert.throws(task, 'throws');