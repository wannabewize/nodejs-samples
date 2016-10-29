// 데이터 쓰기/읽기
console.log('endianns : ', require('os').endianness());

var buffer = Buffer.alloc(10);
// 0으로 채우기
buffer.fill(0);

// 8bit : -128~127
buffer.writeInt8(0, 0); // value, offset
buffer.writeInt8(1, 1);
buffer.writeInt8(-1, 2);  
buffer.writeInt8(-128, 3);
buffer.writeInt8(127, 4); // FF
buffer.writeUInt8(0xFF, 5);

// 16bit
buffer.writeUInt16LE(0xFF, 6); // 255 : FF 00 
buffer.writeUInt16BE(0xFF, 8); // 255 : 00 FF

console.log(buffer);

// 읽기
console.log('[0] : ', buffer.readInt8(0));
console.log('[1] : ', buffer.readInt8(1));
console.log('[2] : ', buffer.readInt8(2));
console.log('[3] : ', buffer.readInt8(3));
console.log('[4] : ', buffer.readInt8(4));
console.log('[5] : ', buffer.readUInt8(5));
console.log('[6~7] : ', buffer.readUInt16LE(6));
console.log('[8~9] : ', buffer.readUInt16BE(8));