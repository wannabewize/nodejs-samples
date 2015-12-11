function task1() {
   return new Promise(function (fullfill, reject) {
      console.log('Task1 Start');
      setTimeout(function() {
         console.log('Task1 Done');
         fullfill('Result1');   
      }, 500);
   });   
}

function task2(arg) {
   return new Promise(function (fullfill, reject) {
      console.log('Task2 Start');
      setTimeout(function() {
         console.log('Task2 Done');
         fullfill('Result2');   
      }, 200);
   });
}

function task3(arg) {
   return new Promise(function (fullfill, reject) {
      console.log('Task3 Start');
      setTimeout(function() {
         console.log('Task3 Done');
         fullfill('Result3');   
      }, 300);
   });
}

Promise.race([task1(), task2(), task3()]).then(
   function fullfilled(result) {
      console.log('fullfilled : ', result);
   },
   function rejected(error) {
      console.error('Rejected : ', error);
   }
);