var http = require('http');
var cluster = require('cluster');

if (cluster.isMaster) {
   // Fork workers.
   var numCPUs = require('os').cpus().length;
   console.log('Number of CPU : ', numCPUs);
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }
   
   cluster.on('online', function (worker) {
      console.log('Worker #' + worker.id + ' is Online');
   });

   cluster.on('exit', function (worker, code, signal) {
      console.log('Worker #' + worker.id + ' exit');
   });
} else {
   var worker =  cluster.worker;

   http.createServer(function (req, res) {
      res.writeHead(200);
      
      console.log('Worker #' + worker.id + ' is handling Request');

      // 소수 구하기
      var primeNumbers = [];      
      for(var i = 1 ; i < 10000 ; i ++ ) {
         var isPrimeNumber = true;
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
      res.end('Prime numbers : ' + primeNumbers);

   }).listen(3000);
}