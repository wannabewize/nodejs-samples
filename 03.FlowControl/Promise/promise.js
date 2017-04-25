/**
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 프라미스를 이용한 비동기 태스크 함수는 resolve와 reject 함수를 파라미터로 하는 실행 함수(executor)를 이용해서 생성한다.
 * 프라미스로 작성한 태스크가 성공적으로 수행(fullfill)되면 resolve 함수를 동작시키고, 실패(reject)하면 reject 함수를 실행한다.
 */

var condition;
var asyncTask = new Promise( (resolve, reject) => {
      setTimeout(function () {
         condition ? resolve() : reject();
      }, 1000);  
});

condition = true;

asyncTask.then( () => {
   console.log('Promise Fullfileld');
} , () => {
   console.log('Promise Rejected');
});