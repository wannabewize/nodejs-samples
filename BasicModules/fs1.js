var fs = require('fs');

// open File, Read only
var fd = fs.openSync('./fs1.js', 'r');
console.log('fd : ', fd);

var strData = 'String Data';

var file = './data1.txt';
try {
   fs.accessSync('./data1.txt', fs.F_OK)
   console.log('파일 data1.txt 존재함');
}
catch ( err ) {
   // 파일이 없을 때, 파일 생성   
   console.log('파일 data1.txt 생성');
   fs.writeFileSync(file, strData);   
}
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



