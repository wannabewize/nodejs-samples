var fs = require('fs');

var file = './song.txt';
try {
   fs.accessSync(file, fs.F_OK)
   console.log('파일 접근 가능(Sync)');
   
   var data = fs.readFileSync(file, 'utf8');
   console.log('파일 내용(Sync) : ', data);
}
catch ( exception ) {
   // 파일 없음   
   console.log('파일 없음 에러(Sync) : ', exception);  
}

// 비동기
fs.access(file, fs.F_OK | fs.R_OK, function(err) {
   if ( err ) {
      console.error('파일 없음(Async) : ', err);
      return;
   }
   
   fs.readFile(file, 'utf8', function(err, data) {
      if ( err ) {
         console.error('파일 읽기 에러(Async) : ', err);
         return;
      }
      
      console.log(data);
   });
});