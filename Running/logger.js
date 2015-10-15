var winston = require('winston');


// winston.add(winston.transports.File, { filename: 'app-log.log' });
winston.add(winston.transports.DailyRotateFile, { datePattern: 'yyyy-MM-dd', filename: 'app-daily-log.' })

winston.log('info', 'Hello World!');
winston.info('winston.info log');

var logger = new (winston.Logger)({
   transports: [
      new (winston.transports.Console)({
         name: 'info',
         filename: 'service-info.log',
         level: 'info'
      }),
      new (winston.transports.File)({
         name: 'error-file',
         filename: 'service-error.log',
         level: 'error'
      })
   ]
});

logger.error('Error.');
logger.info('Information.');



