/**
 * 파일에 내용 쓰기, FileDescriptor
 */
const fs = require('fs');

const fd = fs.openSync('./textAppend3.txt', 'w');
fs.write(fd, 'Hello World!!!', 'utf8', (err, written, string) => {
    if ( err ) {
        console.log('write error :', err);
        return;
    }

    console.log('fd를 이용한 write 성공');

    // 특정 위치에 내용 쓰기
    fs.write(fd, 'Node.js', 6, 'utf8', (err, written, string) => {
        if ( err ) {
            console.log('write error : ', err);
            return;
        }

        console.log('fd를 이용한 파일 중간 내용 추가 성공');

        fs.close(fd, (err) => {
            if (err) {
                console.log('fd.close error :', err);
            }
        });
    });    
});
