var http = require('http');
http.createServer(function (req, res) {
   console.log('Request!');
   var buffer = '';
   req.on('data', function(chunk) {
      buffer += chunk;
   });
   req.on('data', function() {     
      console.log(buffer);
      var parsed = JSON.parse(buffer);
      console.log(parsed);
      res.end('JSON Request Example');
   });
}).listen(3000);