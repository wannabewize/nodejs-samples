const fs = require('fs');

// 파일 삭제
fs.unlink('./binaryData.dat', (err) => {
   if (err) {
      console.error('삭제하려는 파일이 없음.(혹은 경로 에러)');
      return;
   }
   console.log('파일 삭제 성공');
});


try {
   fs.unlinkSync('./None-exist.dat');
}
catch (err) {
   console.log('없는 파일 삭제 에러 :', err);
}