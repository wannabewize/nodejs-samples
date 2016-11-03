var http = require('http');
http.createServer(function (req, res) {
   var data = {
      name: '태연',
      job: 'Singer'
   };
   console.log('Json response!!');
   res.setHeader('Content-type', 'application/json');
   res.write(JSON.stringify(data));
   res.end();
}).listen(3000);