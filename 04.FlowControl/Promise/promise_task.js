/**
 * 프라미스를 사용하는 비동기 태스크 작성하기
 */
function task(success) {
    return new Promise((resolve, reject) => {
        console.log('Task started');
        setTimeout( () => {
            if (success) {
                resolve('Success');
            }
            else {
                reject('Error');
            }
        }, 1000);
    });
}

// Promise를 사용하는 태스크
task(true).then((result) => {
    console.log('첫 번째 비동기 태스크 성공 : ', result);
}, (error) => {
    console.log('첫 번째 비동기 태스크 실패 : ', error);
});

// reject 되는 프라미스
task(false).then((result) => {
    console.log('두 번째 비동기 태스크 성공 : ', result);
}, (error) => {
    console.log('두 번째 비동기 태스크 실패 : ', error);
});

// catch를 이용해서 실패시의 콜백을 등록할 수 있다.
task(false).then(result => {
    console.log('세 번째 비동기 태스크 성공 :', result);
}).catch(error => {
    console.log('세 번째 비동기 태스크 실패 :', error);
});