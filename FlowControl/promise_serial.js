function task1() {
   return new Promise(function (fullfill, reject) {
      console.log('Task1 done');
      fullfill('Result1');   
   });   
}

function task2(arg) {
   return new Promise(function (fullfill, reject) {
      console.log('Task2 done');
      fullfill('Result2');   
   });
}

function task3(arg) {
   return new Promise(function (fullfill, reject) {
      console.log('Task3 done');
      fullfill('Result3');   
   });
}

task1().then(task2).then(task3).then(
   function fullfilled(result){
      console.log('All task fullfilled');
   },
   function rejected(err) {
      console.error('Error : ', err);
   });
