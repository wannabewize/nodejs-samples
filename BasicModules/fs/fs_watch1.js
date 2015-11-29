var fs = require('fs');

fs.mkdirSync('test');

// test 폴더 감시
var watcher = fs.watch('test', function(event, filename) {
   console.log('파일 ', filename, ' 이벤트 : ' + event);
});

setTimeout(function() {
   console.log('파일 생성');
   fs.writeFileSync('test/test1.txt', 'Hello');
}, 1000);

setTimeout(function() {
   console.log('파일 이름 변경');   
   fs.renameSync('test/test1.txt', 'test/test2.txt');
}, 2000);

setTimeout(function() {   
   console.log('파일 삭제');   
   fs.unlinkSync('test/test2.txt');   
}, 3000);
   
setTimeout(function() {
   fs.rmdirSync('test');
}, 4000);


setTimeout(function() {
   console.log('감시 종료');
   watcher.close();
}, 5000);