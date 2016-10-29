// Buffer from Array
const buf1 = Buffer.from([65, 66, 10, 255, 010, 077, 0x10, 0x11, 0xFF]);
console.log('buffer : ', buf1);
console.log('toHex : ',buf1.toString('hex'));
console.log('toAscII : ', buf1.toString('ascii'));

// Buffer from String
const buf2 = Buffer.from('Hello World', 'ascii');
console.log('buffer str : ', buf2);
console.log(buf2.toString('hex'));
console.log(buf2.toString('ascii'));
try {
   console.log(buf2.toString('asci')); // wrong encoding
}
catch ( err ) {
   console.log('Error : ', err.message);
}


