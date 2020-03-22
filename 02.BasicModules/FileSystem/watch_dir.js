const fs = require('fs');

fs.mkdirSync('watching');
let watcher;
// test 폴더 감시
try {
   watcher = fs.watch(__dirname + '/watching', (event, filename) => {
      console.log('listener2:', '파일 ', filename, ' 이벤트 : ' + event);
   });
}
catch ( err ) {
   console.log('감시 실패 :', err);
}

watcher.on('change', (event, filename) => {
   console.log('listener1:', '파일 ', filename, ' 이벤트 : ' + event);
});

watcher.on('close', () => {
   console.log('watcher closed');
});

setTimeout(() => {
   console.log('파일 생성');
   fs.writeFileSync('watching/test1.txt', 'Hello');
}, 1000);

setTimeout(() => {
   console.log('파일 이름 변경');   
   fs.renameSync('watching/test1.txt', 'watching/test2.txt');
}, 2000);

setTimeout(() => {   
   console.log('파일 삭제');   
   fs.unlinkSync('watching/test2.txt');   
}, 3000);
   
setTimeout(() => {
   fs.rmdirSync('watching');
}, 4000);


setTimeout(() => {
   console.log('감시 종료');
   watcher.close();
}, 5000);