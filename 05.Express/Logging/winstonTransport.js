var winston = require('winston');

console.log('== Transport ==');
var logger = new winston.Logger({
   transports: [
      new winston.transports.Console(),
      new winston.transports.File({
         name : 'error-logger',
         filename: 'service-error.log',
         level: 'error'
      })
   ]
});

logger.error('Error Message');
logger.info('Info Message');
logger.warn('Warn Message');

// 파일 로거 삭제
logger.remove('error-logger');
logger.error('Error Message2');


// 날짜 로거 추가
// var dailyFileTransport = new winston.transports.DailyRotateFile({dataPattenr:'yyyy-MM-dd', filename:'daily-log'}); 
winston.add(winston.transports.DailyRotateFile, {dataPattenr:'yyyy-MM-dd', filename:'Log/daily-log'});

logger.info('Daily Info Message');
logger.warn('Daily Wraning Message');
logger.error('Daily Error Message');

