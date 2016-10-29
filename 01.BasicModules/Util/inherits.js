console.log('== inherits ==');

const util = require('util');


function Parent() {
}
Parent.prototype.sayHello = function() {
   console.log('Hello. from Parent Class');
}

function Child() {
   
}

util.inherits(Child, Parent);

const child = new Child();
child.sayHello();

console.log('instanceof Child : ',child instanceof Child);
console.log('instanceof Parent : ',child instanceof Parent);

