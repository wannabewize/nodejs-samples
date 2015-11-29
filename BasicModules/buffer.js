// 버퍼 덧붙이기
console.log('== 버퍼 덧붙이기 샘플 ==');
var buf1 = new Buffer('Hello');
var buf2 = new Buffer(' World');
var buf3 = Buffer.concat([buf1, buf2]);

console.log('Buffer Concat : ', buf3);
console.log('Concat buffer decode : ', buf3.toString());
console.log('Concat buffer length : ', buf3.length);

//버퍼 비교
console.log('compare 1 vs 2 : ', Buffer.compare(new Buffer([1]), new Buffer([2])));
console.log('compare 2 vs 2 : ', Buffer.compare(new Buffer([2]), new Buffer([2])));
console.log('compare 3 vs 2 : ', Buffer.compare(new Buffer([3]), new Buffer([2])));


// 데이터 쓰기/읽기
console.log('endianns : ', require('os').endianness());

var buffer = new Buffer(10);
// 8bit : -128~127
buffer.writeInt8(0, 0); // value, offset
buffer.writeInt8(1, 1); 
buffer.writeInt8(127, 2)
// 16bit : -256~255
buffer.writeInt16LE(2^16, 3); 

console.log(buffer); 