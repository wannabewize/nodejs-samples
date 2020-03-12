/**
 * 에러 발생
 */
function errorFn1() {
   throw 'a';
}

function errorFn2() {
   throw 1;
}

function errorFn3() {
   throw { value : '1234' };
}

function errorFn4() {
   throw new Error('Error Message');
}
