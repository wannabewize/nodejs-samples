/**
 * 응답 메세지 출력용
*/
var http = require('http');
var urlStr = 'http://www.dramafever.com/st/news/images/14941-singer-iu-koreas-younger-sister-photo-collection.jpg';
console.log(urlStr);
http.get(urlStr, function(res) {
   console.log('== Header ==');
   console.log(res.headers);
   res.on('data', function(chunk) {
      console.log(chunk.toString('hex'));
   });
   res.on('end', function() {
      console.log('== END ==');
   });      
}).on('error', function(err) {
   console.error('Error : ', err);
});