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

var fs = require('fs');
var Console = require('console').Console;

var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');
var logger = new Console(output, errorOutput);

// stdout.log 파일로 로그 출력
logger.info('info','정보 메세지');
logger.log('log','로그 메세지');

// stderr.log 파일로 경과, 에러 메세지 출력
logger.warn('warn', '경고 메세지');
logger.error('error', '에러 메세지');

// 시간 측정
var num = 10000;
var primeNumbers = [];

// 시간 측정 시작
console.time('PRIME NUMBER');

for(var i = 1 ; i < num ; i ++ ) {
   var isPrimeNumber = true;
   // TODO : i의 제곱근보다 커지면 더 이상 비교할 필요는 없다.
   for(var j = 2 ; j < i ; j++) {
      if ( i % j == 0 ) {
         isPrimeNumber = false;
         break;
      }
   }
   if ( isPrimeNumber ) {
      primeNumbers.push(i);
   }
}

// 시간 측정 시작
console.timeEnd('PRIME NUMBER');
