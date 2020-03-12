/**
 * 클로저와 컨텍스트
 */

function makeId() {
   let lastId = 0;

   return function() {
      return ++lastId
   };
}

let idFunc = makeId();

console.log(idFunc());
console.log(idFunc());
console.log(idFunc());

// Error
// console.log(lastId);

let idFund2 = makeId();
console.log(idFund2());
console.log(idFund2());