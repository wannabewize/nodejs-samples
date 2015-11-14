var crypto = require('crypto');

var ciphers = crypto.getCiphers();
console.log(ciphers); // ['aes-128-cbc', 'aes-128-ccm', ...]



console.log('== Hash');
// console.log(crypto.getHashes());
var hash1 = crypto.createHash('md5');

hash1.update('Hello');
var hashed = hash1.digest('hex');
console.log('hashed : ', hashed);

var hash2 = crypto.createHmac('sha1', 'secret key');
hash2.update('Hello');
var hashed2 = hash2.digest('hex');
console.log('hashed2 : ', hash2);

