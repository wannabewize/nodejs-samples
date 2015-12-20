var http = require('http');
var libxml = require("libxmljs");
var jstoxml = require('jstoxml');

var movieList = [{ title: '아바타', director: '제임스 카메론' }];

http.createServer(function (req, res) {
   if (req.method.toLowerCase() == 'post') {
      var buffer = '';
      req.on('data', function (chunk) {
         buffer += chunk;
      });

      req.on('end', function () {
         console.log(buffer);
         var xmlDoc = libxml.parseXmlString(buffer);

         var title = xmlDoc.get('/movie/title').text();
         var director = xmlDoc.get('/movie/director').text();
         console.log('title : ', title, ' director : ', director);
         
         if ( title && director ) {
            movieList.push({title:title, director:director});
            res.writeHead(200, {'Contnet-Type':'application/xml'});         
            var result = {result:'success'};
            res.end(jstoxml.toXML(result));
         }
         else {
            res.writeHead(400, {'Content-Type':'application/xml'});
            var result = {error:'wrong field'};
            res.end(jstoxml.toXML(result));
         }           
      })
   }
   else {
      var data = {
         count: movieList.length,
         data: movieList
      };
      res.writeHead(200, { 'Contnet-Type': 'application/xml' });
      var result = jstoxml.toXML({ result:data });
      res.end(result);
   }
}).listen(3000);