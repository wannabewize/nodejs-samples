var str = 'good night🌙 good mornging 😀';
console.log(str);
console.log(str.length);

var sliced = str.slice(0,11);
console.log(sliced);

var punycode = require('punycode');
var decoded = punycode.ucs2.decode(str);
var sliced2 = decoded.slice(0,11);
var encoded = punycode.ucs2.encode(sliced2);
console.log(encoded);