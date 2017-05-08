/**
 * 버퍼
 */
// Buffer from Array
const data = [0x48, 0x65, 0x6c, 0x6c, 0x6f];
console.log('data :',data);

const buf1 = Buffer.from(data);
console.log('buffer :', buf1);
console.log('toHex :',buf1.toString('hex'));
console.log('toAscII :', buf1.toString('ascii'));
console.log('toUtf8 :', buf1.toString('utf8'));

// Buffer from String
const buf2 = Buffer.from('Hello World', 'utf8');
console.log('buffer str : ', buf2);
console.log(buf2.toString('hex'));
console.log(buf2.toString('ascii'));
try {
   console.log(buf2.toString('asci')); // wrong encoding
}
catch ( err ) {
   console.log('Error : ', err.message);
}
