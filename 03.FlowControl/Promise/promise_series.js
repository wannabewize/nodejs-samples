/**
 * 비동기 태스크를 연속 동작시키기
 * Task1의 결과를 Task2에 전달, Task2의 결과를 Task3전달한다.
 */

// 비동기 태스크 1. 0 ~ 9 사이의 난수 결과
function task1(success) {
    console.log('Task1 started');
    const taskResult = Math.round(Math.random() * 10);
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log('Task1 Finished with', taskResult);
            success ? resolve(taskResult) : rejected('Task1 Failure');
        }, 1000)
    });
};

// 비동기 태스크 2. 10 ~ 19 사이의 난수 결과
function task2(previousTaskResult, success) {
    console.log('Task2 started with', previousTaskResult);
    // 두 번째 태스크의 결과 : 10 ~ 19 사이의 난수
    const taskResult = Math.round(Math.random() * 10) + 10;
    
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            const nextResult = [previousTaskResult, taskResult]
            console.log('Task2 Finished with', nextResult);
            success ? resolve(nextResult) : rejected('Task2 Failure');
        }, 1500)
    });
}

// 비동기 태스크 3. 20 ~ 29 사이의 난수 결과
function task3(previousTaskResult, success) {
    console.log('Task3 started with', previousTaskResult);
    const taskResult = Math.round(Math.random() * 10) + 20;
    
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            console.log('Task3 Finished with', taskResult);
            const nextResult = previousTaskResult.concat(taskResult);
            success ? resolve(nextResult) : rejected('Task3 Failure');
        }, 1500)
    });
}

function runSeriesTask1() {
    // Task1, Task2, Task3 연속 호출
    task1(true).then(task1Result => {
        console.log('Task1 Success');

        task2(task1Result, true).then(task2Result => {
            console.log('Task2 Success');

            task3(task2Result, true).then(task3success => {
                console.log('All Tasks Done with', task3success);
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

function runSeriesTask2() {
    task1(true).then( task1Result => {
        return task2(task1Result, true);
    }, task1Failure => {
        console.log('Task1 Failure');
    }).then( task2Result => {
        return task3(task2Result, true);
    }, task2failure => {
        console.log('Task2 Failure');
    }).then( task3Result => {
        console.log('All Task Done with', task3Result)
    }, task3Failure => {
        console.log('Task3 Failure');
    });
}

function runSeriesTask3() {
    task1(true).then( task1Result => {
        return task2(task1Result, true);
    }).then( task2Result => {
        return task3(task2Result, true);
    }).then( task3Result => {
        console.log('All Task Done with', task3Result);
    }).catch( taskError => {
        console.log('Task Error!', taskError);
    });
}


// runSeriesTask1(true);
// runSeriesTask2(true);
runSeriesTask3(true);
