/**
 * 클러스터로 소수 출력 서비스
 */
var http = require('http');
var cluster = require('cluster');

var num = 10000;

if ( cluster.isMaster ) {
   var numCPUs = require('os').cpus().length;
   console.log('Number of CPU : ', numCPUs);
   
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }
}
else {
   var worker = cluster.worker;
   http.createServer(function (req, res) {
      res.writeHead(200);
   
      console.time('PRIME NUMBER');
      var primeNumbers = [];      
      for(var i = 1 ; i < num ; i ++ ) {
         var isPrimeNumber = true;
         // TODO : i의 제곱근 이상 비교할 필요는 없다.
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
      console.timeEnd('PRIME NUMBER');
      res.end('Prime Number Service, Worker ' + worker.id + ' primeNumbers : ' + primeNumbers);
   }).listen(3001);   
}