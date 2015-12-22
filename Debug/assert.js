var assert = require('assert');


console.log('== True 판단하기')
var trueValue = true;
assert(trueValue);
assert.ok(trueValue, '참 판단');

var falseValue = false
assert(falseValue, 'False Value');


var value = 0;
assert.equal(value, 0, 'value는 0 이어야 함');

var obj1 = {
   value : 0
};

var obj2 = {
   value : 0 
};


assert.equal(obj1, obj1);
assert.deepEqual(obj1, obj2);

function Rectange(w, h) {
   this.w = w;
   this.h = h;
}

var r1 = new Rectange(10, 10);
var r2 = new Rectange(10, 10);


assert.deepEqual(r1, r2);


assert.strictEqual(1, 1);