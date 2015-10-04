/*
 * Step1
*/
function simpleTask(resolve) {
   // 작성
   resolve('Step1 task done!');
}

function nextTask(result) {   
   console.log(result);
   console.log('Next Task done');
}

new Promise(simpleTask).then(nextTask);

new Promise(simpleTask).then(result => {
   console.log('After task1');
}).then( reason => {
   console.log('After task2');
});

/*
 * Step 2 
 */
// Promise with Reject
function complextTask(resolve, reject) {
   // 작성 성공
   resolve('Complex Task done');
   // 작성 실패
   // reject('Complex Task failure');
}

function onResolved(result) {
   // Fullfilled 상태
   console.log(result);
   console.log('Promise Fullfilled.');  
}

function onRejected(reason) {
   // Rejected 상태
   console.log(reason);
   console.log('Promise rejected');   
}

new Promise(complextTask).then(onResolved, onRejected);


/*
 * Step 3 
 */
function myTask(success) {
   return new Promise(function(resolve, reject) {
      if ( success ) {
         resolve('Promise Function task done');
      }
      else {
         reject('Promise Function task failure');
      }
   });
}

myTask(true).then(onResolved, onRejected);

/**
 * Step 4 - Promise.all
 */
var task1 = new Promise(function(resolve) {
   setTimeout(function() {
      console.log('Task1 done');
      resolve();
   }, 2000);
});

var task2 = new Promise(function(resolve) {
   setTimeout(function() {
      console.log('Task2 done');
      resolve();
   }, 1000);
});

Promise.all([task1, task2]).then(function() {
   console.log('All Task done');
});
