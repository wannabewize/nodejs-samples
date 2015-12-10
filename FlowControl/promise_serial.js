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

task1().then(task2).then(function(result){
   console.log('All task fullfilled');
});
