console.time('Prime Numbers');

var cluster = require('cluster');
var process = require('process');

// console.log('Number of CPU : ', numCPUs);

// 마스터면 - 워커에게 작업 분배
if (cluster.isMaster) {
   var start = 1;
   var end = 100000;
   
   // Fork workers.
   var numCPUs = require('os').cpus().length;
   for (var i = 0; i < numCPUs; i++) {      
      cluster.fork();
   }

   var i = 0;
   var rangeOfWorker = Math.ceil((end-start) / numCPUs);
   cluster.on('online', function (worker) {      
      var workerStart = rangeOfWorker * i;
      var workerEnd =  rangeOfWorker * (i + 1) - 1;
      i++;
      console.log('worker ', worker.id, ' will find prime number : ', workerStart , ' ~ ', workerEnd);
      worker.send({start : workerStart, end : workerEnd})       
   });

   cluster.on('exit', function (worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
   });
   
   
}
else {
   process.on('message', function(msg) {
      var start = msg.start;
      var end = msg.end;
      
      console.log('message event on worker ', start, end);
       
      var primeNumbers = [];
   
      for (var i = start; i < end; i++) {
         var isPrimeNumber = true;
         for (var j = 2; j < i; j++) {
            if (i % j == 0) {
               isPrimeNumber = false;
               break;
            }
         }
   
         if (isPrimeNumber) {
            primeNumbers.push(i);
            // console.log('Prime number Finder(' + cluster.worker.id + ') : ', i);      
         }
      }
   
      // 마스터로 결과 반환      
      console.log('Worker(' + cluster.worker.id + ') found ' + primeNumbers.length + ' Prime numbers');
      // this는 process
      this.send({ start : start, end : end, primeNumbers : primeNumbers});
      
      cluster.worker.kill();
   });   
}

