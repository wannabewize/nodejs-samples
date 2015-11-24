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



function Rectangle(width, height) {
   this.width = width;
   this.height = height;
}

Rectangle.prototype.size = function() {
   return this.width * this.height;
}

function Square(length) {
   this.width = length;
   this.height = length;   
}
// prototype을 이용한 상속 방법
// Square.prototype = Rectangle.prototype;
// util.inherits를 이용한 상송
util.inherits(Square, Rectangle);

var r = new Square(10);
console.log(r.size());
