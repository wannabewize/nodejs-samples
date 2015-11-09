var crypto = require('crypto');

var ciphers = crypto.getCiphers();
console.log(ciphers); // ['aes-128-cbc', 'aes-128-ccm', ...]



console.log('== Hash');
console.log(crypto.getHashes());