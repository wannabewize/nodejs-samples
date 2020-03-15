var http = require('http');
var address = 'http://커피.kr';

http.get(address, function(res) {
   // console.log(res);
   var body = '';
   res.on('data', function(chunk) {
      body += chunk;
   });
   res.on('end', function() {
      console.log('Response : ', body);
   });
}).on('error', function(err) {
   console.error('Error : ', err);
});