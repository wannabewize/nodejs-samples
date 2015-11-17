var schedule = require('node-schedule');

// Cron Style
schedule.scheduleJob('*/10 * * * * *', function(){
    console.log('10초 간격으로 실행 ', new Date());
});

schedule.scheduleJob({second: 17}, function(){
    console.log('매 17초 마다 실행 ', new Date());
});


// Date Style 2015년 11월 17일, 20시 57분 실행
var date = new Date(2015, 10, 17, 20, 57, 0);
schedule.scheduleJob(date, function() {
   console.log('특정 날짜에 실행');
});

var j = schedule.scheduleJob(date, function() {
   console.log('특정 날짜에 실행');
});
// 스케쥴 취소
j.cancel();