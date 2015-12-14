// Post Data Only
var http = require('http');
var query = require('querystring');

var movieList = [];

var server = http.createServer(function (req, res) {
   if (req.method.toLowerCase() == 'post') {
      addNewMovie(req, res);
   }
   // get이면 목록 출력
   else {
      showList(req, res);
   }
});

function addNewMovie(req, res) {
   var body = '';
   req.on('data', function (chunk) {
      console.log('data event : ' + chunk.length);
      body += chunk;
   });
   req.on('end', function () {
      console.log('end : ' + body);
			
      // 바디 파싱
      var data = query.parse(body);
      var title = data.title;
      var director = data.director;

      if (title && director) {
         // 목록 저장
         movieList.push({ title: data.title, director: data.director });
				
         // Redirect
         res.statusCode = 302;
         res.setHeader('Location', '.');
         res.end();
      }
      else {
         res.statusCode = 400;
         res.end('Bad Request : title, director 정보 부족');
      }
   });
}

function showList(req, res) {
   res.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8' });
   res.write('<html>');
   res.write('<meta charset="UTF-8">');
   res.write('<body>');

   res.write('<h3>Favorite Movie</h3>');
   res.write('<div><ul>');

   movieList.forEach(function (element) {
      res.write('<li>' + element.title + '(' + element.director + ')</li>');
   }, this);
   res.write('</ul></div>');

   res.write(
      '<form method="post" action="."><h4>새 영화 입력</h4>' +
      '<div><input type="text" name="title" placeholder="영화제목"></div>' +
      '<div><input type="text" name="director" placeholder="감독"></div>' +
      '<input type="submit" value="upload">' +
      '</form>'
      );
   res.write('</body>');
   res.write('</html>');
   res.end();
}

server.listen(3001);
console.log('Server is running on 3001');