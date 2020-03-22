/**
 * 파일에 내용 쓰기
 */
const fs = require('fs');

const path = './newFile.txt';
const data = 'Hello Node.js';

// 동기식 방식으로 내용 저장
try {
   fs.writeFileSync(path, data);
} catch ( error ) {
   console.error(error);
}

// 비동기 방식으로 내용 저장
const path2 = __dirname + '/newFile2.txt';

fs.writeFile(path2, data, 'utf-8', err => {
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