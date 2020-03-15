/**
 * async-await, promise 기반의 함수를 콜백 기반으로 변경
 */

 function promiseFunc() {
     return new Promise( (resolve, reject) => {
        resolve('Promise function result');
        // reject('Error');
     });
 }

 // promise 기반으로 사용하기
 promiseFunc().then( (arg) => {
     console.log('Promise 기반으로 동작 - 성공 :', arg);
 }, (err) => {
     console.log('Promise 기반으로 동작 - 실패 :', err);
 });

 // callback 기반으로 변경
 const util = require('util');
 const callbackFn = util.callbackify(promiseFunc);

 callbackFn( (err, result) => {
    console.log('Callback 기반으로 변경해서 동작');
    console.log(`Result: ${result}`)
    console.log(`Error : ${err}`)
 });