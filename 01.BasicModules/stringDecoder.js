// Stringdecoder
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8'); 

const buf1 = Buffer.from('SGVsbG8gTm9kZS5qcw==', 'base64');
console.log('base64 String : ', buf1);
console.log('decoded : ', decoder.write(buf1));

const buf2 = Buffer.from('48656c6c6f20537472696e674465636f646572', 'hex');
console.log('hex String : ', buf2);
console.log('decode : ', decoder.write(buf2));


