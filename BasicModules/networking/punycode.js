var punycode = require('punycode');

console.log('== ASCII Code');
var korStr = '한글';
var asc = punycode.encode(korStr);
console.log('ASCII Encode : ', asc);
console.log('Decode : ', punycode.decode(asc));

var encodedUrl = punycode.toASCII('한글.com');
console.log('toASCII : ', '한글.com => ', encodedUrl);

var decodedUrl = punycode.toUnicode(encodedUrl);
console.log('toUnicode : ', encodedUrl, ' => ', decodedUrl);

console.log('== String with Emoji');
var str = 'good night🌙 good mornging😀';
console.log('str : ',str);
console.log('length ', str.length);

var sliced = str.slice(0,11);
console.log('slide(0,11) : ',sliced);

var decoded = punycode.ucs2.decode(str);
// console.log('ucs2.decode : ', decoded);
var sliced2 = decoded.slice(0,11);
var encoded = punycode.ucs2.encode(sliced2);
console.log('punycode.decode.slice(0,11) : ',encoded);