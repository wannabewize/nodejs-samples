const fsp = require('fs').promises;
const filePath = '../README.md';

fsp.access(filePath)
.then( () => {
    // Promise 객체 반환
    return fsp.readFile(filePath, 'utf8');
})
.then( (result) => {
    console.log('FileAccess, FileRead Success');
})
.catch( (err) => {
    // Chain에 연결된 모든 프라미스의 에러 처리
    console.log('promise error :', err);
});



fsp.access(filePath)
.then( fsp.readFile(filePath, 'utf8') )
.then( (result) => {
    console.log('FileAccess, FileRead Success');
})
.catch( (err) => {
    console.log('promise error :', err);
});
