//
// Class and Extends
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//
class Parent {
    doIt() {
        console.log('Parent do It');
    };
}

class Child extends Parent {
    doIt() {
        console.log('Child do It');
    }
}

const child = new Child();
child.doIt();

console.log('Child object is Parent?', child instanceof Parent);
console.log('Child object is Child?', child instanceof Child);


//
// Prototype
//

Parent.prototype.sayHello = function() {
    console.log('Hello');
};

child.sayHello();

