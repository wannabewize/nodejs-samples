// Basic Log
var intValue = 3;
console.log('int Value ' + 3);

var obj = {
   name : 'IU',
   job : 'Singer'
}

console.log('obj : ' + obj);
//obj : [object Object]

console.log('obj : ', obj);
// obj :  { name: 'IU', job: 'Singer' }

var array = [1, 2, 3];
console.log('array : ' + array);
console.log('array : ' , array);

// Error Stack Info
var error = new Error('Error');
console.log('Error : ', error.stack);

// Log Level
console.log('log', 'log message');
console.info('info', 'info message');
console.warn('warn', 'warn message');
console.error('error', 'error message');
