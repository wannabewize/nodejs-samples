new Promise(task1).then(task2);

function task1(fullfill) {
   console.log('태스크 1 시작');
   setTimeout(function() {
      console.log('태스크 1 종료');
      fullfill('태스크 1 결과');
   }, 2000);
}

function task2(result) {
   console.log('태스크 2 시작, 이전 태스크 결과 : ', result);
   setTimeout(function() {
      console.log('태스크 2 종료');
   }, 1000);   
}
