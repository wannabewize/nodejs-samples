const fs = require('fs');

fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    console.log('Rename complete!');
});


fs.rename('None-Exist.dat', 'newFile.dat', (err) => {
    if ( err ) {
        console.log('Rename Error :', err);
        return;
    }
    console.log('Rename complete!');
});

// 디렉토리
try {
    fs.renameSync('OldDir', 'NewDir');
    console.log('디렉토리 이름 변경 성공');
}
catch ( err ) {
    console.log('RenameSync, Dir Error', err);
}