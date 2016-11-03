var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
   // URL 분석
   var parsed = url.parse(request.url, true);
   // URL중 query 분석
   var query = parsed.query;
   // start와 end	
   var start = parseInt(query.start);
   var end = parseInt(query.end);
	
   // 쿼리 체크. 누락되거나 숫자가 아닌 경우 체크
   if (isNaN(start) || isNaN(end)) {
      response.statusCode = 404;
      response.end('Wrong Parameter');
   }
   // 시작 숫자가 종료 숫자보다 크면 에러
   else if (start > end) {
      response.statusCode = 404;
      response.end('end가 start보다 커야 함');
   }
   else {
      var result = 0;
      for (var i = start; i <= end; i++) {
         result += i;
      }
      response.statusCode = 200;
      response.end('Result : ' + result);
   }
});

server.listen(3000, (err) => {
   console.log("usage : http://HOST/?start=NUM1&end=NUM2");
});