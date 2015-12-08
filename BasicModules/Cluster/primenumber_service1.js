/**
 * 소수 출력 서비스
 */
var http = require('http');

var num = 10000;
   
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
   res.end('Prime Number Service : ' + primeNumbers);
}).listen(3000);