var async = require('async');

async.waterfall([
      function(callback) {
         console.log('태스크 1 시작');
         setTimeout(function() {
            console.log('태스크 1 종료, 태스크 2로 데이터 전달');
            callback(null, 'hello');
         }, 3000);         
      },
      function(arg, callback) {
         console.log('태스크 2 시작, 이전 태스크에서 전달된 데이터 : ', arg);
         setTimeout(function() {
            console.log('태스크 2 종료, 태스크 3으로 데이터 전달');
            callback(null, arg, 'world');
         }, 1000);         
      },
      task3
   ],
   function(err, results) {
      if ( err ) {
         console.error('에러 : ', err);
         return;
      }
      console.log('모든 태스크 종료, 최종 결과 : ', results);
   }
);


function task3(arg1, arg2, callback) {
   console.log('태스크 3 시작, 이전 태스크에서 전달된 데이터 : ', arg1, ',', arg2);
   setTimeout(function() {
      console.log('태스크 3 종료, async의 완료 콜백으로 데이터 전달');
      var data = arg1 + ' ' + arg2 + '!';
      callback(null, data);
   }, 2000);         
}