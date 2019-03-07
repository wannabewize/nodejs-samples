const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('가장 최근에 본 영화는?', (answer) => {
    console.log(`소중한 응답 감사합니다. : ${answer}`);
  
    rl.close();
});