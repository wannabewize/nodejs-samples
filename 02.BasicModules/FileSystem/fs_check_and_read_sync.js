const fs = require('fs');

const file = './song.txt';

try {
   fs.accessSync(file, fs.F_OK)
   console.log('파일 존재');
}
catch ( err ) {
   // 파일이 없을 때, 종료   
   console.log('파일 존재하지 않음');
   process.exit(1);   
}
// 파일에 내용 읽기
try {
   const stats = fs.statSync(file)
   // console.log(stats);
   console.log('Create : ', stats['birthtime']);
   console.log('size : ', stats['size']);
   console.log('isFile : ', stats.isFile());
   console.log('isDirectory : ', stats.isDirectory());
   console.log('isBlockDevice : ', stats.isBlockDevice());
   
   // 파일 읽기
   if ( stats.isFile() ) {
      const data = fs.readFileSync(file, 'utf-8');
      console.log('File Contents : ', data);
   }
}
catch ( err ) {
   console.error('File Error : ', err);
}



