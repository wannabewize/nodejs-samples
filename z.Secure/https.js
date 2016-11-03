/**
 * HTTPS 실습
 * 
 * 키와 사설 인증서 발급
 * 1. 키 생성
 *    openssl genrsa -out key.pem 2048
 * 
 * 2. 인증서 발급 요청
 *    openssl req -new -key key.pem -out req.csr
 * 
 * 3. 인증서 발급
 *    openssl x509 -req -in req.csr -signkey key.pem -out cert.pem -days 365
 * 
 */
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

var server = https.createServer(options, function(req, res) {
   console.log('Secure Connection Request');
   res.end('Hello');
});

server.listen(3001, function(err) {
   if ( err ) {
      console.log('error : ', err);
      return;      
   }
   console.log('https server is listening @ 3001');
});