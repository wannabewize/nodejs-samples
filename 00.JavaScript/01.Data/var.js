// Redeclaration
var val1 = 1;

var val1 = 2; 

console.log('val1 =', val1);


var val2 = 0;
{
   var val2 = 1;
   console.log('val2 = ', val2);
}
console.log('val2 = ', val2);


// Hoisting

console.log('val3 = ', val3); // Error
var val3 = 'val3 is not defined Error';