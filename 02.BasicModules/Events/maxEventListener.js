/**
 * EventEmitter의 최대 리스너 개수 설정
 */

console.log(`기본 리스너 개수 : ${process.getMaxListeners()}`)

process.setMaxListeners(11);

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너1');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너2');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너3');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너4');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너5');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너6');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너7');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너8');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너9');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너10');
});

process.on('exit', (code) => {
    console.log('process의 exit 이벤트 리스너11');
});



console.log("== 프로그램 종료 ==");