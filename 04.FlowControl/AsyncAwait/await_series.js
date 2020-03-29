/**
 * Promise 기반으로 비동기 방식의 난수 발생 태스크, 비동기 방식의 덧셈 태스크
 * await를 이용해서 비동기 태스크를 순차로 동작시키기
 */
function randomTask() {
    return new Promise((resolve, reject) => {
            const taskResult = Math.round(Math.random() * 10);
            setTimeout(() => {
                resolve(taskResult);
            }, 1000);
    });
}


function addTask(arg1, arg2) {
    return new Promise( (resolve, reject) => {
        const result = arg1 + arg2;
        setTimeout(()=>{
            resolve(result);
        }, 1000);
    });
}

async function doIt() {
    try {
        let r1 = await randomTask();
        console.log('Generate Random Number : ', r1);
        let r2 = await randomTask();
        console.log('Generate Random Number : ', r2);
        let sum = await addTask(r1, r2);
        console.log('Add Two NUmber : ', sum);
    } catch (error) {
        console.log('Task Failure', error);
    }
}

doIt();