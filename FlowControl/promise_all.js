var task1 = new Promise(function(resolve) {
   setTimeout(function() {
      console.log('Task1 done');
      resolve();
   }, 600);
});

var task2 = new Promise(function(resolve) {
   setTimeout(function() {
      console.log('Task2 done');
      resolve();
   }, 500);
});

Promise.all([task1, task2]).then(function() {
   console.log('All Task done');
});
