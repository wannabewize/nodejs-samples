const async = require('async');

const array = ['hello', 'World', 'I kike', 'Node.js'];

// 항목 1개씩 동작시키려면 eachSeries 사용
async.each(array, function (item, callback) {
   console.log('Taks Started : ', item);
   setTimeout(function () {
      console.log('Task Done ', item);
      callback();
   }, item);
}, function (err) {
   if (err) {
      console.error('Error : ', err);
      return;
   }
   console.log('async.each 완료');
});