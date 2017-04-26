/**
 * Promise.all을 이용한 다수의 비동기 태스크 실행하기
 * then에는 각 태스크의 결과 전달된다.
 */

// 비동기 태스크 1. 실행 결과는 0 ~ 9  사이의 난수
function task1(success) {
    console.log('Task1 started');
    const taskResult = Math.round(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task1 Finished with', taskResult);
            success ? resolve(taskResult) : reject('Task1 Failure');
        }, 1500)
    });
};

// 비동기 태스크 2. 실행 결과는 10 ~ 19  사이의 난수
function task2(success) {
    console.log('Task2 started');
    const taskResult = Math.round(Math.random() * 10) + 10;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task2 Finished with', taskResult);
            success ? resolve(taskResult) : reject('Task2 Failure');
        }, 500)
    });
}

// 비동기 태스크 3. 실행 결과는 20 ~ 29  사이의 난수
function task3(success) {
    console.log('Task3 started');
    const taskResult = Math.round(Math.random() * 10) + 20;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task3 Finished with', taskResult);
            success ? resolve(taskResult) : reject('Task3 Failure');
        }, 1500)
    });
}

function runWithSuccess() {
    Promise.all([task1(true), task2(true), task3(true)]).then(results => {
        console.log('모든 태스크 성공. ', results);
    }, error => {
        console.log('태스크 실패. ', error);
    });
}

function runWithFailure() {
    Promise.all([task1(false), task2(false), task3(false)]).then(results => {
        console.log('모든 태스크 성공. ', results);
    }, error => {
        console.log('태스크 실패. ', error);
    });    
}

// runWithSuccess();
runWithFailure();
