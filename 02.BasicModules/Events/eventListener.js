/**
 * 이벤트 다루기
 */

// Readline 모듈
const readline = require('readline');

// Realine 모듈의 Interface 객체
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.once('line', (input) => {
   console.log(`line event 발생. once로 등록. ${input}`);
});

var count = 10;

rl.on('line', (input) => {
   console.log(`line event 발생. on으로 등록. ${input}`);

   // count가 0이 되면 더이상 이벤트 리스너가 동작하지 않는다.
   if ( --count < 0 ) {
      rl.removeAllListeners();
   }
});


setTimeout( () => {
   rl.emit('line', '자동으로 이벤트 발생...1');
}, 1000);

setTimeout( () => {
   rl.emit('line', '자동으로 이벤트 발생...2');
}, 2000);