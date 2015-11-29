var fs = require('fs');

var path1 = __dirname;
var path2 = './song.txt';


console.log('== fs.statSync ==');
try {
   var stats = fs.statSync(path1);
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


// 비동기
fs.stat(path2, function(err, stats) {
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
   
   if ( stats.isFile() ) {
      fs.readFile(path2, 'utf-8', function(err, data) {
         if ( err ) {
            console.error('파일 읽기 에러 : ', err);
            return;
         }
         console.log('파일 읽기 :', data);
      });
   }
});

