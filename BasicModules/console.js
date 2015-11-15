// Log Level
console.log('console.log', 'log message');
console.info('console.info', 'info message');
console.warn('console.warn', 'warn message');
console.error('console.error', 'error message');

var fs = require('fs');
var Console = require('console').Console;

var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');
var logger = new Console(output, errorOutput);

// stdout.log 파일로 로그 출력
logger.log('info','정보 메세지');
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
