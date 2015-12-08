var numCPUs = require('os').cpus().length;
console.log('Number of CPU : ', numCPUs);

console.time('PRIME_NUMBER');

var number = 200000;

for(var i = 0 ; i < numCPUs; i++) {
   var primeNumbers = [];      
   for(var i = 1 ; i < number ; i ++ ) {
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
}

console.timeEnd('PRIME_NUMBER');


