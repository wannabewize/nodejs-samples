/**
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 프라미스를 이용한 비동기 태스크 함수는 resolve와 reject 함수를 파라미터로 하는 실행 함수(executor)를 이용해서 생성한다.
 * 프라미스로 작성한 태스크가 성공적으로 수행(fullfill)되면 resolve 함수를 동작시키고, 실패(reject)하면 reject 함수를 실행한다.
 */

let asyncSuccessTask = new Promise( (resolve, reject) => {
      setTimeout(function () {
         resolve('Task Result');
      }, 1000);  
});

let asyncFailTask = new Promise( (resolve, reject) => {
      setTimeout(function () {
         reject('Task Error');
      }, 1000);  
});


// Promise 기반의 
// asyncSuccessTask.then( (result) => {
//    console.log('Task1 Success :', result);
// }, (error) => {
//    console.log('Task1 Fail :', error);
// });