// 버퍼 덧붙이기
console.log('== 버퍼 덧붙이기 샘플 ==');
var buf1 = new Buffer('Hello');
var buf2 = new Buffer(' World');
var buf3 = Buffer.concat([buf1, buf2]);

console.log('Buffer Concat : ', buf3);
console.log('Concat buffer decode : ', buf3.toString());
console.log('Concat buffer length : ', buf3.length);

var buf4 = buf3.slice(3, 8);
console.log('Slice(3, 8) : ', buf4.toString());

//버퍼 비교
console.log('== 버퍼 비교');
console.log('compare 1 vs 2 : ', Buffer.compare(new Buffer([1]), new Buffer([2])));
console.log('compare 2 vs 2 : ', Buffer.compare(new Buffer([2]), new Buffer([2])));
console.log('compare 3 vs 2 : ', Buffer.compare(new Buffer([3]), new Buffer([2])));