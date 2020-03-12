console.log('== Redeclaration');
let letVal1 = 1;
// Redeclaration Error on let
// let letVal1 = 2; 

/**
 * let - block 변수
 */

let letVal2 = 0;
{
   let letVal2 = 1;
}

console.log('letVal = ', letVal2);


// Hoisting

console.log('letVal3 = ', letVal3); // Error
let letVal3 = 'letVal3';
// ReferenceError: Cannot access 'letVal3' before initialization