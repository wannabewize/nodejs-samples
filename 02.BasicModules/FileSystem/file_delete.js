const fs = require('fs');

// 파일 삭제
fs.unlink('./binaryData.dat', (err) => {
    if ( err ) {
       console.error('Delete Error : ', err);
       return;
    }
    console.log('파일 삭제 성공');
 });   