// 정의되지 않은 함수 호출 - 에러 상황
// doIt();

try {
    doIt();
}
catch ( error ) {
    console.log('error :', error);
}

console.log('== END ==');