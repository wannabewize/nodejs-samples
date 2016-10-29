class Parent {
}

Parent.prototype.sayHello = function() {
    console.log('Hello');
};

class Child extends Parent {
}

const child = new Child();
child.sayHello();

console.log(child instanceof Parent);
console.log(child instanceof Child);

