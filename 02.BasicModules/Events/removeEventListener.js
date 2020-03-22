const readline = require('readline');

// Realine 모듈의 Interface 객체
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let count = 10;

rl.on('line', (input) => {
   console.log('Litener1:', input);
   count--;

   // count가 5가 되면 더이상 이벤트 리스너가 동작하지 않는다.
   if ( count == 5 ) {
      // rl.removeListener('line', listner2);     
      rl.off('line', listner2);
      console.log('listner2 removed'); 
   }

   // count가 0이 되면 모든 이벤트 리스너 제거
   if ( count == 0 ) {
      rl.removeAllListeners('line');
      console.log('All listener removed');
      rl.close();
   }
});

function listner2(input) {
   console.log('Litener2!');
}
rl.on('line', listner2);

rl.on('close', () => {
   console.log('Close Event!');
})

