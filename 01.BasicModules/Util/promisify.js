/**
 * Util의 promisify를 이용해서 콜백 기반의 함수를 프라미스 기반으로 변경
 */

function addTwoNumber(i, j, callback) {
    // timer를 이용해서 비동기 방식으로 만들기
    setTimeout( () => {
        // 첫번째 파라미터는 error
        callback(null, i + j);
    }, 1000);    
}

// 콜백으로 사용하기
addTwoNumber(1, 2, (error, ret) => {
    console.log(`콜백 기반으로 동작 - 1 + 2 = ${ret}`);
});

const util = require('util');

let promisifedFn = util.promisify(addTwoNumber);

promisifedFn(3, 4).then( (ret) => {
    console.log(`Promised 기반으로 변경된 함수 동작 - 3 + 4 = ${ret}`);
})
.catch((error) => {
    console.log(`Promised 기반으로 변경된 함수 동작 에러 ${error}`);
});