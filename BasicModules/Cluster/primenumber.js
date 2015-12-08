var http = require('http');
   
http.createServer(function (req, res) {
   res.writeHead(200);

   var primeNumbers = [];      
   for(var i = 1 ; i < 10000 ; i ++ ) {
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
   res.end('Hello World : ', primeNumbers);
}).listen(3000);