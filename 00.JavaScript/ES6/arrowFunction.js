// No parameter
function doIt(func) {
    func();
}

doIt(function() {
    console.log('Hello Function Expression');
});

doIt( ()=> { console.log('Hello Arrow Function'); });

// 파라미터가 1개인 경우
function add(i, j, handler) {
    handler(i + j);
}

add(1, 2, sum => { console.log('1 + 2 = ' + sum); } );

// with Two Param
function makeTwoRandom(limit, handler) {
    const r1 = Math.floor(Math.random() * limit);
    const  r2 = Math.floor(Math.random() * limit);
    handler(r1, r2);
}

makeTwoRandom(10, (r1, r2) => { console.log('Tow random ', r1, r2); });

// with Return
function giveMeNumber(numberMaker) {
    console.log('Arrow function returns : ',numberMaker());
}

giveMeNumber( ()=> 3.14 );

// with Object Return
function giveMeObject( objectReturner ) {
    console.log('Arrow function returns Object : ', objectReturner() );
}

giveMeObject( () => ({name: 'IU'}) );


// Property}
const addProp = (i, j) => { return i + j; }
const ret = addProp(1, 2);
console.log('Property : ', ret);

// this
class MyClass {
    constructor() {
        this.count = 0;
    }
}
MyClass.prototype.increase = function() {
    return () => {
        console.log('this : ', this);
        console.log(count++);
    }
};
MyClass.prototype.increase2 = function() {
    const self = this;
    return function() {
        console.log('this : ', this);
        console.log(self.count++);
    }
};

const obj = new MyClass();
const fn = obj.increase();
fn();
fn();

const fn2 = obj.increase2();
fn2();
fn2();
