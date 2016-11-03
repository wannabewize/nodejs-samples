function task1(arg1, arg2, callback) {
   console.log('태스크 1 시작');
   setTimeout(function() {
      console.log('태스크 1 종료');
      callback('태스크 1 결과');
   }, 1000);       
}

function task2(arg, callback) {
   console.log('태스크 2 시작');
   setTimeout(function() {
      console.log('태스크 2 종료');
      callback('태스크 2 결과');
   }, 1000);       
}

function task3(arg1, arg2, arg3, callback) {
   console.log('태스크 3 시작');
   setTimeout(function() {
      console.log('태스크 3 종료');
      callback('태스크 3 결과');
   }, 1000);       
}

function task4(arg1, arg2, callback) {
   console.log('태스크 4 시작');
   setTimeout(function() {
      console.log('태스크 4 종료');
      callback('태스크 4 결과');
   }, 1000);       
}

task1('a', 'b', task1Complete);

function task1Complete(result) {
   task2('c', task2Complete);
}

function task2Complete(result) {
   task3('d', 'e', 'f', task3Complete);   
}

function task3Complete(result) {
   task4('g', 'h', task4Complete);
}

function task4Complete(result) {
   console.log('태스크 4의 결과 처리 콜백');
}