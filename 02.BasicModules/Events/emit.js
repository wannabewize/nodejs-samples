const readline = require('readline');

// Realine 모듈의 Interface 객체
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.on('line', (input) => {
   console.log('line event fired 발생', input);
});

rl.on('close', () => {
    console.log('close Event fired!');
});

setTimeout(() => {
    const ret = rl.emit('close');
    console.log('emit 결과:', ret);
}, 500);

setTimeout( () => {
   rl.emit('line', '1초 후 이벤트 발생.');
}, 1000);

setTimeout( () => {
   rl.emit('line', '2초 후 이벤트 발생.');
}, 2000);

setTimeout( () => {
    console.log('3초뒤 종료');
    rl.close();
 }, 3000);