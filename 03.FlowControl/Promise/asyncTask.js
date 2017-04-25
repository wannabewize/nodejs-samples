/**
 * Promise를 익히기 위한 예제
 */

// 비동기 태스크가 성공하면 success가 동작하고 실패하면 failure가 동작한다.
function asyncTask1(condition, success, failure) {
   setTimeout(function () {
      condition ? success() : failure();
   }, 1000);
}

// 비동기 태스크를 동작시키면서 성공 시의 콜백, 실패 시의 콜백을 입력한다.
asyncTask1(true, () => {
   console.log('비동기 태스크 성공 - 성공 콜백 동작');
}, () => {
   console.log('비동기 태스크 실패 - 실패 콜백 동작');
});


// 비동기 태스크를 반환하되, 성공과 실패 콜백을 실행하면서 입력한다.
// 태스크에 관련된 입력만 하면 되므로 태스크 생성 API가 간단해진다.

function asyncTask2(condition) {
      return (success, failure) => {
            setTimeout(function () {
                  condition ? success() : failure();
            }, 1000);
      }
}

// 비동기 태스크를 생성한다.
var doTask = asyncTask2(true);

// 태스크를 실행하면서 성공과 실패시의 콜백을 입력한다.
doTask( () => {
   console.log('비동기 태스크 성공 - 성공 콜백 동작');
}, () => {
   console.log('비동기 태스크 실패 - 실패 콜백 동작');
});