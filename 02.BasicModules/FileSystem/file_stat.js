const fs = require('fs');

// 디렉토리 정보
const path1 = __dirname;
console.log('== fs.statSync ==');
try {
   const stats = fs.statSync(path1);
   console.log('isDirectory : ', stats.isDirectory());
   console.log('isFile : ', stats.isFile());
   console.log('isSocket : ', stats.isSocket());
   console.log('Size : ', stats.size);
   console.log('Birth Time : ', stats.birthtime);
   console.log('Access Time : ', stats.atime);
   console.log('Change Time : ', stats.ctime); // 상태 변경
   console.log('Modified Time : ', stats.mtime); // 내용 변경   
} catch (error) {
   console.log('파일 상태 읽기 에러 : ', error);
}


// 파일 정보 얻기 - 비동기
const path2 = './song.txt';

fs.stat(path2, (err, stats) => {
   console.log('== fs.stat ==');
   if ( err ) {
      console.log('파일 상태 읽기 에러 :', err);
      return;
   }
   console.log('isDirectory : ', stats.isDirectory());
   console.log('isFile : ', stats.isFile());
   console.log('isSocket : ', stats.isSocket());   
   console.log('Size : ', stats.size);
   console.log('Birth Time : ', stats.birthtime);
   console.log('Access Time : ', stats.atime);
   console.log('Change Time : ', stats.ctime); // 상태 변경
   console.log('Modified Time : ', stats.mtime); // 내용 변경
});

