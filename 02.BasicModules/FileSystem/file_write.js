/**
 * 파일에 내용 쓰기
 */
const fs = require('fs');

// 문자 데이터 작성 utf-8
fs.writeFile('./textData.txt', 'Hello World', 'utf-8',  err => {
   if ( err ) {
      console.error('File write Errro : ', err);
      return;
   }
   console.log('텍스트 파일 저장 성공');
});

// 이진 데이터 저장, 동기식
var buffer = Buffer.from([10, 20, 30, 40, 50]);
try {
   fs.writeFileSync('./binaryData.dat', buffer);
   console.log('이진 데이터 저장 성공');

   const ret = fs.readFileSync('./binaryData.dat');
   console.log('read : ', ret);
}
catch ( error ) {
   console.log('파일 저장 실패 :', error);
}