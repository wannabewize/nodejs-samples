var fs = require('fs');

var strData = 'File Asynchronous API Sample';

// 파일에 내용 쓰기
var file = './data2.txt';

fs.writeFile(file, strData, function(err) {
   if ( err ) {
      console.error('File Write Error', err);
      return;
   }
   
   fs.stat(file, function(err, stats) {
      if ( err ) {
         console.error('File Stats Error', err);
         return;
      }

      console.log('Create : ', stats['birthtime']);
      console.log('size : ', stats['size']);
      console.log('isFile : ', stats.isFile());
      console.log('isDirectory : ', stats.isDirectory());
      console.log('isBlockDevice : ', stats.isBlockDevice());
      
      if ( stats.isFile() ) {
         fs.readFile(file, function(err, data) {
            if ( err ) {
               console.error('File Read Error', err);
               return;
            }
            // encoding을 작성하지 않으면 Buffer로
            var str = data.toString('utf-8');
            console.log('File Contents : ', str);
         });               
      }      
   });   
});


