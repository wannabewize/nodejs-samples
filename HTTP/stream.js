var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
   var path = '/Users/wannabewize/Movies/MusicVideo/AOA_Get_Out.mp4'
   res.setHeader('content-type','video/mp4');
   
   fs.readFile(path, function(err, data) {
      res.end(data);
   });      
}).listen(3000);

http.createServer(function(req, res) {
   var path = '/Users/wannabewize/Movies/MusicVideo/AOA_Get_Out.mp4'
   res.setHeader('content-type','video/mp4');
   fs.createReadStream(path).pipe(res);
   
}).listen(3001);


// reafile
/**
 * 
 * Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:   191  388 112.9    349     814
Waiting:       27  133  88.0    107     494
Total:        191  388 112.9    350     814

Percentage of the requests served within a certain time (ms)
  50%    350
  66%    400
  75%    446
  80%    478
  90%    555
  95%    586
  98%    782
  99%    814
 100%    814 (longest request)
 * 
 * Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       2
Processing:   139  347  76.4    330     568
Waiting:       39  105  44.4     94     230
Total:        139  347  76.4    330     568

Percentage of the requests served within a certain time (ms)
  50%    330
  66%    350
  75%    374
  80%    393
  90%    471
  95%    504
  98%    568
  99%    568
 100%    568 (longest request)
 * 
*/