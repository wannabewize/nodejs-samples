var fs = require('fs');

// open File, Read only
var fd = fs.openSync('./fs1.js', 'r');
console.log('fd : ', fd);

var strData = 'String Data';

// 파일에 내용 쓰기
var file = './data1.txt';
fs.writeFileSync(file, strData);   

// 파일 삭제
fs.unlink(file);


// 파일에 내용 읽기
try {
   var stats = fs.statSync(file)
   // console.log(stats);
   console.log('Create : ', stats['birthtime']);
   console.log('size : ', stats['size']);
   console.log('isFile : ', stats.isFile());
   console.log('isDirectory : ', stats.isDirectory());
   console.log('isBlockDevice : ', stats.isBlockDevice());
   
   // 파일 읽기
   if ( stats.isFile() ) {
      var data = fs.readFileSync(file, 'utf-8');
      console.log('File Contents : ', data);
   }
}
catch ( err ) {
   console.error('File Error : ', err);
}



