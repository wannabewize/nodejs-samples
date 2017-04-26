/**
 * 비동기 태스크를 연속 동작시키기
 * Task1, Task2는 난수를 하나 만들고, Task3는 두 값을 더한다.
 */

// 비동기 태스크 1. 0 ~ 9 사이의 난수 결과
function task1(arg) {
    console.log('Task1 started');
    const taskResult = Math.round(Math.random() * 10);
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log('Task1 Finished with', taskResult);
            var success = arg;
            success ? resolve(taskResult) : rejected('Task1 Failure');
        }, 1000)
    });
};

// 비동기 태스크 2. 10 ~ 19 사이의 난수 결과
function task2(result, arg) {
    console.log('Task2 started with', result);
    // 두 번째 태스크의 결과 : 10 ~ 19 사이의 난수
    const taskResult = Math.round(Math.random() * 10) + 10;
    
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            var success = arg;
            console.log('Task2 Finished with', taskResult);
            success ? resolve(taskResult) : rejected('Task2 Failure');
        }, 1500)
    });
}

// 비동기 태스크 3. 결과는 입력된 두 값의 합
function task3(result1, result2, arg) {
    console.log('Task3 started with', result1, result2);
    const taskResult = result1 + result2;
    
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            console.log('Task3 Finished with', taskResult);
            var success = arg;
            success ? resolve(taskResult) : rejected('Task3 Failure');
        }, 1500)
    });
}

function example1(success) {
    // Task1, Task2, Task3 연속 호출
    task1(success).then(task1Result => {
        console.log('Task1 Success');

        task2(task1Result, true).then(task2Result => {
            console.log('Task2 Success');

            task3(task1Result, task2Result, true).then(task3success => {
                console.log('Task3 Success');
            }, task3failure => {
                console.log('Task3 Failure');
            });
        }, task2failure => {
            console.log('Task2 Failure');
        });
    }, task1failure => {
        console.log('Task1 Failure');
    });
}

// catch를 이용한 태스크 실행
function example2() {
    // Task1, Task2, Task3 연속 호출
    task1(true).then(task1Result => {
        console.log('Task1 Success');
        task2(task1Result, true).then(task2Result => {
            console.log('Task2 Success');

            task3(task1Result, task2Result, true).then(task3success => {
                console.log('Task3 Success');
            }).catch(task3failure => {
                console.log('Task3 Failure');
            });
        }).catch(task2failure => {
            console.log('Task2 Failure');
        });
    }).catch(task1failure => {
        console.log('Task2 Failure');
    });
}

// example1(true);
example2(true);