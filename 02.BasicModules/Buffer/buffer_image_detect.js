/**
 * Buffer를 이용해서 이미지 포맷 검사하기
 * png 포맷의 첫 8바이트는 다음과 같다.
 * 89  50  4e  47  0d  0a  1a  0a
 */

const fs = require('fs');
const buffer = require('buffer');

const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const pngBuffer = fs.readFileSync('./node.png');
// 0부터 8바이트만 비교
if ( pngHeader.compare(pngBuffer, 0, 8) == 0) {
    console.log('node.png는 png 파일입니다.')
}
else {
    console.log('node.png는 png 포맷이 아닙니다.');
}

const jpgBuffer = fs.readFileSync('./node.jpg');
if ( pngHeader.compare(jpgBuffer, 0, 8) == 0) {
    console.log('node.jpg는 png 파일입니다.')
}
else {
    console.log('node.jpg는 png 포맷이 아닙니다.');
}

console.log('== 8바이드 헤더 보기')
for (let i = 0; i < 8; i++) {
    console.log(`${i} - ${pngBuffer.readUInt8(i)}`);
}    

console.log('0 :', pngBuffer.readUInt8(0));
console.log('1 :', pngBuffer.readUInt8(1));
console.log('2 :', pngBuffer.readUInt8(2));
console.log('3 :', pngBuffer.readUInt8(3));
console.log('4 :', pngBuffer.readUInt8(4));
console.log('5 :', pngBuffer.readUInt8(5));
console.log('6 :', pngBuffer.readUInt8(6));
console.log('7 :', pngBuffer.readUInt8(7));

