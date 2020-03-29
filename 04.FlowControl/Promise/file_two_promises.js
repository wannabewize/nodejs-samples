/**
 * 비동기 동작을 연속해서 사용하는 경우.
 * 프라미스로 콜백헬 만들기.
 */
const fsp = require('fs').promises;
const filePath = '../README.md';

fsp.access(filePath)
.then( result => {
    console.log('file 접근 가능');

    fsp.readFile(filePath, 'utf8')
    .then( result => {
        console.log(result);
    })
})


// fsp.readFile('./value1.txt', 'utf-8')
// .then( result => {
//     const value1 = parseInt(result);

//     fsp.readFile('./value2.txt', 'utf-8')
//     .then( result => {
//         const value2 = parseInt(result);
//         console.log(`${value1} + ${value2} = ${value1 + value2}`)
//     })
// })