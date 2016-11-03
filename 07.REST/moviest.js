var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('./movieData.json');
var movieList = JSON.parse(data);

var server = http.createServer(function (req, res) {
   var method = req.method.toLowerCase();
   switch (method) {
      case 'get':
         handleGetRequest(req, res);
         return;
      case 'post':
         handlePostRequest(req, res);
         return;
      case 'put':
         handlePutRequest(req, res);
         return;
      case 'delete':
         handleDeleteRequest(req, res);
         return;
      default:
         res.statusCode = 404;
         res.end('Wrong method');
         return;
   }
});
server.listen(3000);

function handleGetRequest(req, res) {
   var url = req.url;
   var list = [];
   movieList.forEach(function (item) {
      list.push({ movieId: item.movieId, title: item.title });
   });
   if (url == '/movies') {
      var list = [];
      for (var i = 0; i < movieList.length; i++) {
         var movie = movieList[i];
         list.push({ id: movie.id, title: movie.title });
      }

      var result = {
         count: list.length,
         data: list
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
   }
   else {
      var id = url.split('/')[2];
      var movie = null;
      for (var i = 0; i < movieList.length; i++) {
         var item = movieList[i];
         if (id == item.id) {
            movie = item;
            break;
         }
      }
      if (movie) {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify(movie));
      }
      else {
         res.writeHead(404, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({error : 'Can not find movie info'}));
      }
   }
}

function handlePostRequest(req, res) {
   var buffer = '';
   req.on('data', chunk=>{
      buffer += chunk;
   });
   req.on('end', ()=>{
      const parsed = JSON.parse(buffer);
      var item = {
         id : movieList.length,
         title : parsed.title,
         director : parsed.director,
         year : parsed.year || 0,
         synopsis : parsed.synopsis || ''
      };
      movieList.push(item);
      res.end(JSON.stringify(item));
   });
}

function handlePutRequest(req, res) {

}

function handleDeleteRequest(req, res) {

}
