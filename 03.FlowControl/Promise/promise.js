var condition;
var asyncTask = new Promise( (fulfilled, rejected) => {
      setTimeout(function () {
         condition ? fulfilled() : rejected();
      }, 1000);  
});

condition = true;

asyncTask.then( () => {
   console.log('Promise Fullfileld');
} , () => {
   console.log('Promise Rejected');
});