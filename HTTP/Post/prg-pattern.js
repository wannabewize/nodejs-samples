const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
   if (req.method.toLowerCase() == 'post') {
      res.statusCode = 303;
      res.setHeader('Location', '/redirected');
      res.end('success');
   }
   else if ( req.url == '/' ) {
      fs.createReadStream('form.html').pipe(res);
   }
   else if ( req.url == '/redirected' ) {
      res.end('Redirected');
   }
}).listen(3000);