const fsp = require('fs').promises;

const promiseObj = fsp.readFile('../README.md', 'utf8');

promiseObj.then( (value) => {
        console.log('FileRead1 success');
}, (err) => {
    console.log('FileRead1 fail :', err);
});


fsp.readFile('../README.md', 'utf8')
.then( (value) => {
        console.log('FileRead2 success');
        // console.log('File Content : ', value);
}, (err) => {
    console.log('FileRead2 fail :', err);
});


// 에러 발생. catch
fsp.readFile('../README.md_notExist', 'utf8')
.then( (value) => {
        console.log('FileRead3 success');
}).catch( (err) => {
    console.log('FileRead3 fail :', err);
});
