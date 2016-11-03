/**
 * 비동기 동작
 */

// Asycn Task function with Success, Failure Handler
function task(condition, success, failure) {
   setTimeout(function () {
      condition ? success() : failure();
   }, 1000);
}

task(true, () => {
   console.log('async function Success');
}, () => {
   console.log('async function Failure');
});

function task2(condition) {
      return (success, failure) => {
            setTimeout(function () {
                  condition ? success() : failure();
            }, 1000);
      }
}

var taskDone = task2(true);
taskDone( () => {
   console.log('Async Task success');
}, () => {
   console.log('Async Task failure');
});