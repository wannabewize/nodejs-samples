var crypto = require('crypto');

console.log('== Hash');
// 모든 해쉬 알고리즘 보기
// console.log(crypto.getHashes());
var md5 = crypto.createHash('md5');

// Stream 방식으로 사용하기
var hashed;
md5.on('data', function(chunk) {
   if ( ! hashed ) {
      hashed = chunk;
   }
   else 
      hashed.append(chunk);
});

md5.on('end', function() {
   console.log('md5 : ', hashed.toString());
});

md5.setEncoding('hex');
md5.end('hello');

var sha1 = crypto.createHash('sha1');
sha1.update('hello');
var digest = sha1.digest('hex');
console.log('sha1 : ', digest);

// hello -> 5d41402abc4b2a76b9719d911017c592

var hash2 = crypto.createHmac('sha1', 'secret key');
hash2.update('Hello');
var hashed2 = hash2.digest('hex');
console.log('hashed2 : ', hash2);

