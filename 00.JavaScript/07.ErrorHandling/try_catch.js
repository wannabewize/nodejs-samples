/**
 * 에러 처리
 */
console.log('== try/catch ==');
try {
   throw new Error('Error Message');
   console.log('After Error');
}
catch ( err ) {
   console.log('catch', err);
}

console.log('== try/catch/finally ==');
try {
   throw new Error('Error Message');
   console.log('After Error');
}
catch ( err ) {
   console.log('catch', err);
}
finally {
   console.log('Finally');
}

console.log('== try/finally ==');
try {
   // 예외 처리 안됨
   throw new Error('Error Message');
}
finally {
   console.log('Finally');
}