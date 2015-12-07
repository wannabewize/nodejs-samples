var punycode = require('punycode');

console.log('== String with Emoji');
var str = 'good night🌙 good mornging 😀';
console.log('str : ',str);
console.log('length ', str.length);


var sliced = str.slice(0,11);
console.log('slide(0,11) : ',sliced);

var decoded = punycode.ucs2.decode(str);
var sliced2 = decoded.slice(0,11);
var encoded = punycode.ucs2.encode(sliced2);
console.log('punycode.decode.slice(0,11) : ',encoded);


console.log('== ASCII Code');
var korStr = '한글';
var asc = punycode.encode(korStr);
console.log('ASCII : ', asc);
console.log('Decode : ', punycode.decode(asc));

var domain1 = punycode.toUnicode('한글.com');
console.log('domain : ', domain1);

var domain2 = punycode.toASCII('한글.com');
console.log(domain2);


// UTF8
var utf8 = [0xF0, 0x9F, 0x8D, 0x8E]; 
console.log('Buffer.toString : ', new Buffer(utf8).toString('utf8'));
console.log('punycode.encode(UTF8) : ', punycode.ucs2.encode(utf8));

// UTF16
var utf16 = [0xD83C, 0xDF4E]; 
console.log('punycode.encode(UTF16) : ', punycode.ucs2.encode(utf16));

//UTF32
var utf32 = [0x0001F34E]; 
console.log('punycode.encode(UTF32) : ', punycode.ucs2.encode(utf32));
