/**
 * await와 async 예제
 */

function task(success) {
    return new Promise( (resolve, reject) => {
        const taskResult = Math.round(Math.random() * 10);
        setTimeout( ()=> {
            success ? resolve(taskResult) : reject('Error');
        }, 1000);        
    });
}

async function doIt(success) {
    try {
        let result = await task(success);
        console.log('Task Done with', result);        
    } catch (error) {
        console.log('Task Failure', error);
    }
}

// 비동기 태스크 성공
doIt(true);

// 비동기 태스크 실패
doIt(false);
