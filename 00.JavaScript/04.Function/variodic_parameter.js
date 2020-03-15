// 가변길이 파라미터
function addAll(...arg) {
    let result = 0;
    console.log('length :', arg.length);
    console.log('[0]', arg[0]);
    for(const item of arg) {
        result += item;
    }
    return result;
}

console.log( addAll(1) );
console.log( addAll(1, 2, 3) );


// 가변길이 파라미터는 1개만 사용 가능
// function chaos(...arg1, ...arg2) {
// }

// 가변길이 파라미터는 마지막에만 사용
// function chaos(...arg1, arg2) {
// }