/**
 * 비동기 태스크를 연속 동작시키기
 */

function task1(arg) {
    console.log('Task1 started');
    // 첫 번째 태스크의 결과
    const taskResult = Math.round(Math.random() * 10)
    console.log('Task1 Finished with', taskResult);

    var success = arg == true;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            success ? resolve(taskResult) : rejected('Task1 Failure');
        }, 1000)
    });
};

function task2(result, arg) {
    console.log('Task2 started with', result);
    // 두 번째 태스크의 결과
    const taskResult = Math.round(Math.random() * 10) + 10
    console.log('Task2 Finished with', taskResult);

    var success = arg;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            success ? resolve(taskResult) : rejected('Task2 Failure');
        }, 1500)
    });
}

function task3(result1, result2, arg) {
    console.log('Task3 started with', result1, result2);
    // 세 번째 태스크의 결과
    const taskResult = Math.round(Math.random() * 10) + 20
    console.log('Task3 Finished with', taskResult);
    var success = arg;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {            
            success ? resolve(taskResult) : rejected('Task3 Failure');
        }, 1500)
    });
}

function example1() {
    // Task1, Task2, Task3 연속 호출
    task1(true).then(task1Result => {
        console.log('Task1 Success');

        task2(task1Result, true).then(task2Result => {
            console.log('Task2 Success');

            task3(task1Result, task2Result, true).then(task3success => {
                console.log('Task3 Success');
            }, task3failure => {
                console.log('Task3 Filuare');
            });
        }, task2failure => {
            console.log('Task2 Failure');
        });
    }, task1failure => {
        console.log('Task1 Failure');
    });
}

function example2() {
    // Task1, Task2, Task3 연속 호출
    task1(true).then(task1success => {
        console.log('Task1 Success');
        task2(true).then(task2success => {
            console.log('Task2 Success');

            task3(true).then(task3success => {
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

example1();