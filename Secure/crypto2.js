var crypto = require('crypto');
var buffer = require('buffer');

var dh = crypto.createDiffieHellman(1024);
var publicKey = dh.generateKeys('hex');
var privateKey = dh.getPrivateKey('hex');

// var fs = require('fs');

// var privateKey = fs.readFileSync('./key.pem');
// var publicKey = fs.readFileSync('./cert.pem');

var data = 'Hello World';
var buffer = new Buffer(data, 'utf8');

// 공개키로 암호화
var encrypted = crypto.publicEncrypt(publicKey, buffer);
// console.log(encrypted.toString('hex'));

// 개인키로 복호화
var decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('decrypted : ', decrypted.toString());

