var ursa = require('ursa');

var key = ursa.generatePrivateKey(1024, 65537);

var privatePem = key.toPrivatePem();
var privateKey = ursa.createPrivateKey(privatePem);

var publicPem = key.toPublicPem();
var publicKey = ursa.createPublicKey(publicPem);

var message = 'Hello World';
console.log('Original Message : ', message);

// 공개키로 암호화
// encrypt(buf, bufEncoding, outEncoding, padding)
var encrypted = publicKey.encrypt(message, 'utf8', 'hex');
console.log('encrypted : ', encrypted);

// 개인키로 복호화
// decrypt(buf, bufEncoding, outEncoding, padding)
var decrypted = privateKey.decrypt(encrypted, 'hex', 'utf8');
console.log('decrypted : ', decrypted);

