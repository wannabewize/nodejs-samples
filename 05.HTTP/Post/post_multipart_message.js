/**
 * 멀티파트 요청 메세지 보기
 */
const http = require('http');
const server = http.createServer( (req, res) => {
   if ( req.method == 'POST' ) {
      const contentType = req.headers['content-type'];
      console.log('Content-Type :', contentType);
      if ( contentType.startsWith('multipart/form-data') == true ) {
         req.on('data', (chunk) => {
            console.log(chunk.toString());
         });
         req.on('end', () => {
            res.end('OK');
         });
      }
   }
});
server.listen(3000);