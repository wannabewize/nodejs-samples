var schedule = require('node-schedule');

var j = schedule.scheduleJob('42 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
});

var j2 = schedule.scheduleJob('0 17 ? * 0,4-6', function(){
    console.log('Today is recognized by Rebecca Black!');
})