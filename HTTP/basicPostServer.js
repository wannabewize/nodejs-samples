// Post Data Only
var http = require('http');
var query = require('querystring');

var movieList = [];

var server = http.createServer(function (request, response) {
   if (request.method.toLowerCase() == 'post') {
      var body = '';
      request.on('data', function (chunk) {
         console.log('data event : ' + chunk.length);
         body += chunk;
      });
      request.on('end', function () {
         console.log('end : ' + body);
			
         // 바디 파싱
         var data = query.parse(body);
         var title = data.title;
         var director = data.director;

         if (title && director) {
            // 목록 저장
            movieList.push({ title: data.title, director: data.director });
				
            // Redirect
            response.statusCode = 302;
            response.setHeader('Location', '.');
            response.end();
         }
         else {
            response.statusCode = 400;
            response.end('can not find title, director');
         }
      });
   }
   // get이면 목록 출력
   else {
      showList(response);
   }
});

function showList(res) {
   res.writeHeader(200, { 'Content-Type': 'text/html' });
   res.write('<html>');
   res.write('<body>');

   res.write('<h3>Favorite Movie</h3>');
   res.write('<div><ul>');

   movieList.forEach(function (element) {
      res.write('<li>' + element.title + '(' + element.director + ')</li>');
   }, this);
   res.write('</ul></div>');

   res.write(
      '<form method="post" action="."><h4>새 영화 입력</h4>' +
      '<div><input type="text" placeholder="영화제목" name="title"></div>' +
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