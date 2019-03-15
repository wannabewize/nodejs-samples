/**
 * 버퍼와 문자열
 */

const strBuffer = Buffer.from('Hello World');
console.log('Buffer.from(Hello World) :', strBuffer);
console.log('toString(utf8) : ', strBuffer.toString('utf-8'));
console.log('toString(hex) : ', strBuffer.toString('hex'));
console.log('toString(base64) : ', strBuffer.toString('base64'));


const byteBuffer = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log('Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]) :', byteBuffer);
console.log('byteBuffer toString(utf8) :', byteBuffer.toString());
console.log('byteBuffer toString(hex) :', byteBuffer.toString('hex'));

console.log('== Buffer write');

var buffer = Buffer.alloc(10, 0);
buffer.write('Hello World');

console.log(buffer);
console.log(buffer.toString());

console.log('== byte length');
var str1 = 'Hello World';
var length1 = Buffer.byteLength(str1);
console.log(str1, ' length : ', str1.length, ' bytes : ', length1);

// const mailbox = '📭';
// const heart = '❤';

const emoji = '😀📱';
const emojiBuffer = Buffer.from(emoji);
console.log('Emoji :', emoji, ' String Length : ', emoji.length, ' bytes : ', emojiBuffer.byteLength);


// String -> Buffer -> Base64 String
const originStr = 'Hello Node.js';
console.log('Origin : ', originStr);

const buf = Buffer.from(originStr, 'utf8');
const base64Str = buf.toString('base64');
console.log('base64 encoded : ', base64Str);

const originStr2 = Buffer.from(base64Str, 'base64').toString('utf8');
console.log('base64 decoded : ', originStr2);

// Try String Decoder