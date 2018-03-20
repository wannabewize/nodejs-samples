/**
 * 1~Num 까지 더하는 서비스
 */
const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {
   // URL 분석
   const parsed = url.parse(req.url, true);
   // URL중 query 분석
   const query = parsed.query;
   // start와 end	
   const number = parseInt(query.number);
	
   // 쿼리 체크. 누락되거나 숫자가 아닌 경우 체크
   if (isNaN(number) ) {
      res.statusCode = 404;
      res.end();
   }
   // 0보다 작거나 같으면 에러
   else if (number <= 0) {
      res.statusCode = 404;
      res.end('end가 start보다 커야 함');
   }
   else {
      var result = 0;
      for (var i = 0; i <= number; i++) {
         result += i;
      }
      res.statusCode = 200;
      res.end('Result : ' + result);
   }
});

server.listen(3000, () => {
   console.log("usage : http://HOST/?number=NUM. NUM은 양수");
});