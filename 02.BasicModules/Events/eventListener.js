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

rl.once('line', input => {
   console.log('once(line) Event:', input);
});

rl.addListener('line', input => {
   console.log('addListener(line) Event:', input);
});

rl.on('line', input => {
   console.log('on(line) Event:', input);
});