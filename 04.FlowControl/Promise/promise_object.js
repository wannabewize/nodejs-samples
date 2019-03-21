/**
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 프라미스를 이용한 비동기 태스크 함수는 resolve와 reject 함수를 파라미터로 하는 실행 함수(executor)를 이용해서 생성한다.
 * 프라미스로 작성한 태스크가 성공적으로 수행(fullfill)되면 resolve 함수를 동작시키고, 실패(reject)하면 reject 함수를 실행한다.
 */

// 성공하는 Promise
const successPromise = new Promise( (resolve, reject) => {
      // 비동기 동작 실행    
      console.log('Async Success Task started.'); 
      setTimeout( () => {
         resolve('Task Result');
      }, 1000);  
});

// 실패하는 Promise
let failurePromise = new Promise( (resolve, reject) => {
   // 비동기 동작 실행      
   setTimeout(function () {
      reject('Task Error');
   }, 2000);  
});

// 성공/실패 콜백 함수를 입력해서 사용하기
successPromise.then( (result) => {
   console.log('asyncSuccessTask success');
}, (err) => {
   console.log('asyncSuccessTask fail');
});


// then 함수의 에러 처리 함수(onRejected)로 에러 다루기
failurePromise.then( (result) => {
   console.log('asyncFailTask success');
}, (err) => {
   console.log('asyncFailTask fail');
});


// catch 함수를 이용한 에러 처리
failurePromise.then( (result) => {
   console.log('asyncFailTask success');
}).catch( (error) => {
   console.log('asyncFailTask fail');
});