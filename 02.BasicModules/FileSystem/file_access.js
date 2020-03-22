const fs = require('fs');
const mode = fs.F_OK;
const path = __dirname + '/movies.json';
try {
   fs.accessSync(path, mode)
   console.log('파일 접근 가능(Sync)');
   
   const data = fs.readFileSync(path, 'utf8');
   console.log('파일 내용(Sync) : ', data);
}
catch ( exception ) {
   // 파일 없음   
   console.log('파일 없음 에러(Sync) : ', exception);  
}

// 비동기

fs.access(path, mode, error => {
   if ( error ) {
      console.error('파일 없음(Async) : ', error);
      return;
   }
   
   fs.readFile(path, 'utf8', (err, data) => {
      if ( error ) {
         console.error('파일 읽기 에러(Async) : ', error);
         return;
      }
      
      console.log(data);
   });
});