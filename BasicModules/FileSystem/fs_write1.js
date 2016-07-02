var fs = require('fs');


try {
   fs.writeFileSync('./textData.txt', 'Hello World');
   
   // 버퍼로 저장
   var buffer = new Buffer([10,20,30,40,50]);
   fs.writeFileSync('./binaryData.dat', buffer);  
    
} catch (error) {
   console.error('파일 쓰기 에러 : ', error);   
}
