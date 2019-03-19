function task1(arg, callback) {
   console.log('태스크 1 시작');
   setTimeout( () => {
      console.log('태스크 1 종료');
      callback('태스크 1 결과');
   }, 1000);       
}

function task2(arg, callback) {
   console.log('태스크 2 시작');
   setTimeout( () => {
      console.log('태스크 2 종료');
      callback('태스크 2 결과');
   }, 3000);       
}

function task3(arg1, arg2, callback) {
   console.log('태스크 3 시작');
   setTimeout( () => {
      console.log('태스크 3 종료');
      callback('태스크 3 결과');
   }, 1000);       
}

function task4(arg, callback) {
   console.log('태스크 4 시작');
   setTimeout( () => {
      console.log('태스크 4 종료');
      callback('태스크 4 결과');
   }, 2000);       
}

task1('value', (result1) => {
    task2(result1,  (result2) => {
        task3(result1, result2, (result3) => {
            task4(result3, (result4) => {
                // 비동기 동작
            }); task4 
        }); // task3
    }); // task2
}); // task1
