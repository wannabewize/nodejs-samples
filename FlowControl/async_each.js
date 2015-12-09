var async = require('async');

var array = [1000, 500, 2000];

// 항목 1개씩 동작시키려면 eachSeries 사용
async.each(array, function (item, callback) {
   var index = array.indexOf(item);
   console.log('배열 ' + index + '항목 태스크 시작');
   setTimeout(function () {
      console.log('배열 ' + index + '항목 태스크 종료');
      callback();
   }, item);
}, function (err) {
   if (err) {
      console.error('Error : ', err);
      return;
   }
   console.log('async.each 완료');
});