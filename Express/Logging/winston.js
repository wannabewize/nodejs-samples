/**
 * winston 기본
*/
var winston = require('winston');

var data = {name:'value', intVal:3}

console.log('== Basic Usage');
winston.log('info','Log Message');

winston.info('Info Message', data);
winston.warn('Warning Message');
winston.error('Error Message');
winston.info('debug','Debug Message');


winston.add(winston.transports.File, {filename:'service.log'});

winston.info('Info Message2', data);
winston.warn('Warning Message2');
winston.error('Error Message2');
winston.info('debug','Debug Message2');

