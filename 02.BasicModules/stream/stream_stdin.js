const is = process.stdin;
is.setEncoding('utf8');

is.on('data', (chunk) => {
    console.log('data event :', chunk);

    // exit 입력하면 종료
    if ( chunk.startsWith('exit') ) {
        is.destroy();
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
