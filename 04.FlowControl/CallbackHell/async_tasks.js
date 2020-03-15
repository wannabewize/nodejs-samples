function task1(arg) {
    console.log('태스크 1 시작');
    setTimeout( () => {
       console.log('태스크 1 종료');
    }, 3000);       
 }
 
 function task2(arg) {
    console.log('태스크 2 시작');
    setTimeout( () => {
       console.log('태스크 2 종료');
    }, 1000);       
 }
 
 function task3(arg) {
    console.log('태스크 3 시작');
    setTimeout( () => {
       console.log('태스크 3 종료');
    }, 2000);       
 }

 task1('task1');
 task2('task2');
 task3('task3');