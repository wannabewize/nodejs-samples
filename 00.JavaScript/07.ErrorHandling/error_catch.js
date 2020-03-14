// 정의되지 않은 함수 호출 - 에러 상황
// doIt();

try {
    doIt();
}
catch ( error ) {
    const message = error.message;
    console.error(message);
}

console.log('== END ==');