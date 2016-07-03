const fs = require('fs');

const file = 'watching.txt';

const watcher = fs.watchFile(file, {interval:500},  (currStat, prevStat) => {
   console.log('size : ', prevStat.size, ' -> ', currStat.size);
   console.log('modify : ', currStat.mtime);
});

setTimeout( () => {
   console.log('파일 생성');
   fs.writeFileSync(file, 'Hello');
}, 1000);

setTimeout( () => {
   console.log('파일에 내용 추가');
   fs.appendFileSync(file, 'World');
}, 2000);

setTimeout( () => {
   // 모드 변경 - rw/rw/r
   console.log('파일 모드 변경');
   fs.chmodSync(file, '664');
}, 3000);

setTimeout( () => {
   console.log('파일 삭제');
   fs.unlinkSync(file);
}, 4000);

setTimeout( () => {
   console.log('감시 종료');
   fs.unwatchFile(file);
}, 5000);