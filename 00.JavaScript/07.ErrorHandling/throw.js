/**
 * 에러 발생
 */
function throwStringError() {
   throw 'a';
}

function throwNumberError() {
   throw 1;
}

function throwObjectError() {
   throw { value : '1234' };
}

function throwError() {
   throw new Error('Error Message');
}


throwStringError();
throwNumberError();
throwObjectError();
throwError();
console.log('== END ==');