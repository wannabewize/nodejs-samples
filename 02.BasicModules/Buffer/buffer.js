/**
 * 버퍼
 */
// Buffer from String
const buf1 = Buffer.from('Hello World', 'utf8');

console.log('buf1 :', buf1);
console.log('buf1.length :', buf1.length);
console.log('buf1[3] :', buf1[3]);
console.log('buf1[3].toString :', String.fromCharCode(buf1[3]));

console.log('buf1.toHex :',buf1.toString('hex'));
console.log('buf1.toAscII :', buf1.toString('ascii'));
console.log('buf1.toUtf8 :', buf1.toString('utf8'));


// Buffer from Bytes
const data = [0x48, 0x65, 0x6c, 0x6c, 0x6f];
console.log('data :',data);

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


const buf4 = Buffer.from('한글');
console.log('buf4 :', buf4.toString());
console.log('buf4.length :', buf4.length);
console.log('buf4.byteLength :', buf4.byteLength);

const buf5 = Buffer.alloc(9, '한글');
console.log('buf5 :', buf5.toString());
console.log('buf5.length :', buf5.length);
console.log('buf5.byteLength :', buf5.byteLength);
