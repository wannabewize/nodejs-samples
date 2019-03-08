
var number = 200000;

var cluster = require('cluster');

console.time('PRIME_NUMBER_CLUSTER');

if (cluster.isMaster) {
   // Fork workers.
   var numCPUs = require('os').cpus().length;
   // console.log('Number of CPU : ', numCPUs);
   var remainWorkers = numCPUs;
   
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }
   
   cluster.on('online', function(worker) {
      // console.log('Worker #' + worker.id + ' in online');
   });

   cluster.on('exit', function (worker, code, signal) {
      remainWorkers--;
      // console.log('exit Event from : ', worker.id);      
      if ( remainWorkers == 0 ) {
         console.timeEnd('PRIME_NUMBER_CLUSTER');
      }               
   });
} else {
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
   
   cluster.worker.kill();
}

