var http = require('http');
var movieList = [{title:'아바타', director:'제임스 카메론'}];

http.createServer(function (req, res) {
   if ( req.method.toLowerCase() == 'post' ) {
      var buffer = '';
      req.on('data', function (chunk) {
         buffer += chunk;
      });

      req.on('end', function () {
         var parsed = JSON.parse(buffer);
         console.log(parsed);
         
         var title = parsed.title;
         var director = parsed.director;
         
         if ( title && director ) {
            movieList.push({title:title, director:director});
            res.writeHead(200, {'Contnet-Type':'application/json'});         
            var result = {result:'success'};
            res.end(JSON.stringify(result));
         }
         else {
            res.writeHead(400, {'Content-Type':'application/json'});
            var result = {error:'wrong field'};
            res.end(JSON.stringify(result));
         }         
      })      
   }
   else {
      var result = {
         count : movieList.length,
         data : movieList
      };
      res.writeHead(200, {'Contnet-Type':'application/json'});         
      res.end(JSON.stringify(result));
   }
}).listen(3000);