var http = require('http');
var url = require('url');

http.createServer(function(req, res) {   
   
   var parsed = url.parse(req.url, true);
   
   var end = parseInt(parsed.query.end) || 0;   
   var sum = 0;   
   for(var i = 0 ; i <= end ; i++) {
      sum += i;
   }
   res.end('Result : ' + sum);
}).listen(3000);