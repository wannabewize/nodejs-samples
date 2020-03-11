/**
 * let - block 변수
 */

let letVal = 0;
{
   let letVal = 1;
}

console.log('letVal = ', letVal);

console.log('== Redeclaration');

// Redeclaration Error on let
let letVal1 = 1;
// Error
// let letVal1 = 2; 


// Hoisting

// console.log('letVal2 = ', letVal2); // Error

let letVal2 = 'letVal2 is not defined Error';