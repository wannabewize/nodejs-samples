var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('./movieData.json');
var movieList = JSON.parse(data);

var server = http.createServer(function(req, res) {
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
   movieList.forEach(function(item) {
      list.push( {movieId : item.movieId, title:item.title} );
   });
   if ( url == '/movies' ) {
      res.writeHead(200, {'Content-Type':'application/json'});		     
      res.end(JSON.stringify(list));
   }
   else {
      var movieId = url.split('/')[2];
      var movie = null;
      for(var i = 0 ; i < movieList.length; i++) {
         var item = movieList[i];
         if ( movieId == item.movieId) {
            movie = item;
            break;
         }
      }      
      if ( movie ) {
         res.end(JSON.stringify(movie));
      }
      else {
         res.status(404);
         res.end('Can not find movie info');         
      }
   }
}

function handlePostRequest(req, res) {
   
}

function handlePutRequest(req, res) {
   
}

function handleDeleteRequest(req, res) {
   
}
