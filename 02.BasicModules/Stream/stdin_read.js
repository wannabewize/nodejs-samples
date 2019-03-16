/**
 * 콘솔 입력을 스트림으로 다루기
 */

const is = process.stdin;
is.setEncoding('utf8');

is.on('data', (chunk) => {
    console.log('data event :', chunk);

    // exit 입력하면 종료
    if ( chunk.trim() == 'exit' ) {
        is.destroy(); // close 이벤트 발생
        // is.destroy('Error!'); // error, close 이벤트 발생
    }
});

is.on('close', () => {
    console.log('close event');
});

is.on('error', (err) => {
    console.log('error event :', err);
});

is.on('end', () => {
    console.log('end event');
});
