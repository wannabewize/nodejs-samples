// Overloading in JavaScript
function add(i, j, k) {
   return i + j + k;
}

function add(i, j) {
   return i + j;
}


console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));


function MyClass() {
   this.sayHello = function() {
      console.log('Hello');
   }
   
   this.sayHello = function(who) {
      console.log('How are you ' + who);
   }
}


var obj = new MyClass();
obj.sayHello();
obj.sayHello('IU');