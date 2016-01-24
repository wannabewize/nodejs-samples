console.log('== inherits ==');

var util = require('util');


function Parent() {
}
Parent.prototype.sayHello = function() {
   console.log('Hello. from Parent Class');
}

function Child() {
   
}

util.inherits(Child, Parent);

var child = new Child();
child.sayHello();
console.log('instanceof Child : ',child instanceof Child);
console.log('instanceof Parent : ',child instanceof Parent);

