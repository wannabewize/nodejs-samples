function task1( arg) {
   console.log('Task1 started');
   var success = arg > 0;
   return new Promise( (fulfilled, rejected) =>{
      setTimeout( () => {
         console.log('Task1 Finished');
         success ? fulfilled('Taks1 Success') : rejected('Task1 Failure');
      }, 1000)         
   });   
};

function task2(arg1, arg2) {
   console.log('Task2 started');
   var success = arg1 > 0 && arg2 > 0;
   return new Promise( (fulfilled, rejected) =>{
      setTimeout( () => {
         console.log('Task2 Finished');
         success ? fulfilled('Taks2 Success') : rejected('Task2 Failure');
      }, 1500)         
   });  
}

function task3(arg1, arg2) {
   console.log('Task3 started');
   var success = arg1 + arg2 > 0;
   return new Promise( (fulfilled, rejected) =>{
      setTimeout( () => {
         console.log('Task3 Finished');
         success ? fulfilled('Taks3 Success') : rejected('Task3 Failure');
      }, 1500)         
   });  
}

Promise.all([task1(1), task2(1, 2), task3(2, -1)]).then( results => {
   console.log('모든 태스크 성공. ', results);
}, error => {
   console.log('일부 태스트 실패. ', error);
});
/*
Promise.all([ task1(1), task2(1, -1)]).then( results => {
   console.log('모든 태스크 성공. ', results);
}, error => {
   console.log('일부 태스트 실패. ', error);
});
*/