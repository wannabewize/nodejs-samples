// Number
var num = 123;

console.log(typeof num);
if ( typeof num == 'number' ) {
   console.log(num + ' is number');
}

// String
var str = '123';

console.log(typeof str);
if ( typeof str == 'string' ) {
   console.log(str + ' is string');
}

// Object
var obj = {
   name : 'IU'
};

console.log(typeof obj);
if ( typeof obj == 'object' ) {
   console.log(obj + ' is object');
}

var Singer = function(name) {
   this.name = name;
}

var iu = new Singer('IU');
console.log(typeof iu);


// Function
function add(i, j) {
   return i + j;
}

console.log(typeof add);
if ( typeof add == 'function' ) {
   console.log(add + ' is function');
}


