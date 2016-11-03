/*
* 바디 작성 이후에 헤더 작성하기 에러
* */

const http = require('http');

http.createServer(function (req, res) {
   res.write('Hello World');
   // 바디를 작성한 이후에 헤더를 작성하면 에러가 발생한다.
   res.setHeader('Content-Type', 'text/plain');
   res.end();

}).listen(3000);