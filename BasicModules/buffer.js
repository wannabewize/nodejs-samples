console.log('== 문자열 버퍼로 다루기 ==');
var str = 'Hello';
var strBuf = new Buffer(str);

console.log('str : ', str);
console.log('buffer : ',strBuf);
console.log('decode : ', strBuf.toString()); // 기본 UTF8

// 버퍼 덧붙이기
console.log('== 버퍼 덧붙이기 샘플 ==');
var strBuf2 = new Buffer(' NodeJS');
var strBuf3 = Buffer.concat([strBuf, strBuf2]);
console.log('Buffer Concat : ', strBuf3);
console.log('Concat buffer decode : ', strBuf3.toString());
console.log('Concat buffer length : ', strBuf3.length);

console.log('== Buffer from Int Array ==');
var arrayBuf = new Buffer([1, 2, 3]);
console.log('buffer : ', arrayBuf);
console.log('Int Buffer length : ' + arrayBuf.length);

var intVal = arrayBuf.readUInt8(2);
console.log('Int Array Buffer. readInt(2) :',intVal);


/**
 * 고정 크기 버퍼
 */
console.log('== 고정 크기 버퍼 샘플 ==');
var buf2 = new Buffer(10);
console.log('Buffer length : ',buf2.length);

var longStr = 'long long string data';
console.log('String length : ', longStr.length);
buf2.write(longStr);
console.log(buf2.toString());


// Int Write
console.log('== Int Read/Write Sample ==');
var buf3 = new Buffer(10);
buf3.writeIntLE(40, 0);
buf3.writeIntLE(80, 1);

var v1 = buf3.readIntLE(0, 1);
var v2 = buf3.readIntLE(1, 1);
console.log('v1 : ',v1);
console.log('v2 : ',v2);
