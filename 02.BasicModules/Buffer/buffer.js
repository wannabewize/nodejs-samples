/**
 * 버퍼
 */
// Buffer from String
const buf1 = Buffer.from('Hello World', 'utf8');

console.log('buf1 :', buf1);
console.log('buf1.length :', buf1.length);

console.log('buf1.toHex :',buf1.toString('hex'));
console.log('buf1.toAscII :', buf1.toString('ascii'));
console.log('buf1.toUtf8 :', buf1.toString('utf8'));


// Buffer from Bytes
const data = [0x48, 0x65, 0x6c, 0x6c, 0x6f];
const buf2 = Buffer.from(data);
console.log('buffer str : ', buf2);
console.log('buf2.length :', buf2.length);
console.log(buf2.toString('hex'));
console.log(buf2.toString('ascii'));
try {
   console.log(buf2.toString('asci')); // wrong encoding
}
catch ( err ) {
   console.log('Error : ', err.message);
}

const buf3 = Buffer.alloc(10, 'a');
console.log('buf3: ', buf3.toString());
console.log('buf3.length :', buf3.length);
console.log('buf3.byteLength :', buf3.byteLength);

// '한글' 에서 퍼버
const buf4 = Buffer.from('한글');
console.log('buf4 :', buf4.toString());
console.log('buf4.length :', buf4.length);
console.log('buf4.byteLength :', buf4.byteLength);

// 9 바이트의 버퍼를 '한글'로 채우기
const buf5 = Buffer.alloc(9, '한글');
console.log('buf5 :', buf5.toString());
console.log('buf5.length :', buf5.length);
console.log('buf5.byteLength :', buf5.byteLength);

// 유니코드와 버퍼
const smile = '😀';
const smileBuffer = Buffer.from(smile);
console.log('smile buffer length : ', smileBuffer.length);
console.log('smile buffer, toHex ', smileBuffer.toString('hex'));
console.log('smile buffer, toUtf8 ', smileBuffer.toString());

const apple = '';
const appleBuf = Buffer.from(apple);
console.log('apple emoji :', apple);
console.log('apple buffer :', appleBuf);
console.log('length : ', appleBuf.length);

// 📭. 4바이트 문자
const mailboxBuffer = Buffer.from([0xf0, 0x9f, 0x93, 0xad]);
const mailbox = mailboxBuffer.toString();

console.log('mailbox emoji :', mailbox);
console.log('mailbox buffer :', mailboxBuffer);
console.log('length :', mailboxBuffer.length);