/**
 * Promise.race를 이용한 다수의 비동기 태스크 동작시키기
 * 다수의 태스크 중 먼저 끝난 태스크가 then으로 실행. then은 1회만 실행
 */

// 비동기 태스크1. 0~9 사이의 난수 결과
function task1(success) {
    return new Promise((resolve, reject) => {
        console.log('Task1 started');
        setTimeout(() => {
            const taskResult = Math.round(Math.random() * 10);
            console.log('Task1 Finished with', taskResult);
            success ? resolve('Taks1 Result ' + taskResult) : reject('Task1 Failure');
        }, 1000)
    });
};

// 비동기 태스크2. 10~19 사이의 난수 결과
function task2(success) {
    return new Promise((resolve, reject) => {
        console.log('Task2 started');
        setTimeout(() => {
            const taskResult = Math.round(Math.random() * 10) + 10;
            console.log('Task2 Finished with', taskResult);
            success ? resolve('Taks2 Result ' + taskResult) : reject('Task2 Failure');
        }, 1500)
    });
}

// 비동기 태스크3. 20~29 사이의 난수 결과
function task3(success) {
    return new Promise((resolve, reject) => {
        console.log('Task3 started');
        setTimeout(() => {
            const taskResult = Math.round(Math.random() * 10) + 20;
            console.log('Task3 Finished with', taskResult);
            success ? resolve('Taks3 Success ' + taskResult) : reject('Task3 Failure');
        }, 1500)
    });
}

function runWithSuccess() {
    Promise.race([task1(true), task2(true), task3(true)]).then(
        results => {
            console.log('Race Task 종료 : ', results);
        },
        error => {
            console.error('태스크 오류 : ', error);
        }
    );
}

function runWithFailure() {
    Promise.race([task1(false), task2(false), task3(true)]).then(
        results => {
            console.log('Race Task 종료 : ', results);
        },
        error => {
            console.error('태스크 오류 : ', error);
        }
    );    
}


runWithSuccess();
// runWithFailure();
