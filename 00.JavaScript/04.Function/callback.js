//
// 콜백을 사용하지 않는 일반 함수
//
function add(i, j) {
    return i + j;
}

const result1 = add(1, 2);
console.log("1 + 2 = " + result1);

//
// 콜백을 사용하는 함수
//

function add2(i, j, callback) {
    callback(i + j);
}


// 함수 파라미터에 함수를 대입한다.
function addResultHandler(result) {
    console.log("3 + 4 = " + result);
}

add2(3, 4, addResultHandler);

// inline 방식으로 사용하기
add2(5, 6, function(result) {
    console.log("5 + 6 = " + result);
});