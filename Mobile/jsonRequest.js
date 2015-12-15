var http = require('http');
http.createServer(function (req, res) {
   var buffer = '';
   req.on('data', function(chunk) {
      buffer += chunk;
   });
   req.on('data', function() {     
      var parsed = JSON.parse(buffer);
      console.log(parsed);
      res.end('JSON Request Example');
   })
}).listen(3000);