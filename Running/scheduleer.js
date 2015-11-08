var schedule = require('node-schedule');
var fs = require('fs');

var os = fs.createWriteStream('schedlue.log');

os.write('Schedule sample');
var j = schedule.scheduleJob('10 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
    os.write('schedule ' + new Date() + '\n');
});

var j2 = schedule.scheduleJob('0 17 ? * 0,4-6', function(){
    console.log('Today is recognized by Rebecca Black!');
})

