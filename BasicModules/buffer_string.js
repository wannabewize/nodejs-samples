console.log('== Buffer from string');
var strBuffer = new Buffer('Hello World');
console.log(strBuffer);
console.log('utf8 : ', strBuffer.toString('utf-8'));
console.log('hex : ', strBuffer.toString('hex'));
console.log('base64 : ', strBuffer.toString('base64'));


console.log('== Buffer write');

var buffer = new Buffer(10);
buffer.write('Hello World');

console.log(buffer);
console.log(buffer.toString());

console.log('== byte length');
var str1 = 'Hello World';
var length1 = Buffer.byteLength(str1);
console.log(str1, ' length : ', str1.length, ' bytes : ', length1);

var str2 = '😀📱';
var length2 = Buffer.byteLength(str2);
console.log(str2, ' length : ', str2.length, ' bytes : ', length2);


