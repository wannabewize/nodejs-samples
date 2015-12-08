var numCPUs = require('os').cpus().length;
var http = require('http');
console.log('Number of CPU : ', numCPUs);

var cluster = require('cluster');

if (cluster.isMaster) {
   // Fork workers.
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }

   cluster.on('fork', function (worker) {
      console.log('fork event :', worker.id);
   });
   
   cluster.on('online', function (worker) {
      console.log('online Event from : ', worker.id);   
   });

   cluster.on('exit', function (worker, code, signal) {
      console.log('exit Event from : ', worker.id);               
   });
} else {
   http.createServer(function (req, res) {
      res.writeHead(200);
      
      console.log('Handling Request : ', cluster.worker.id);

      var primeNumbers = 'Prime Numbers : ';      
      for(var i = 1 ; i < 10000 ; i ++ ) {
         var isPrimeNumber = true;
         for(var j = 2 ; j < i ; j++) {
            if ( i % j == 0 ) {
               isPrimeNumber = false;
               break;
            }
         }
         if ( isPrimeNumber ) {
            primeNumbers += i + ', ';
         }
      }
      res.end('Hello World : ' + primeNumbers);

   }).listen(3000);
}

