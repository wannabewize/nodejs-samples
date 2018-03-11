/**
 * process의 이벤트 다루기
 */

process.on('uncaughtException', (error) => {
    console.log('에러 발생 ', error);
});

process.on('exit', (code) => {
    console.log('프로그램이 종료됩니다. 종료 코드', code);
});

// 에러 발생 시키기
notExistFunction();

// 강제 종료
// process.exit(0);

// exit 혹은 에러 발생하거나서 실행되지 않는다.
console.log('== Finish ==');

