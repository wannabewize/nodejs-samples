/**
 * 프라미스를 사용하는 비동기 태스크 작성하기
 */
function successTask() {
    return new Promise((resolve, reject) => {
        console.log('Success Task started');
        setTimeout( () => {
            resolve('Success');
        }, 1000);
    });
}

function failTask() {
    return new Promise((resolve, reject) => {
        console.log('Fail Task started');
        setTimeout( () => {
            reject('Fail');
        }, 1000);
    });
}


// Promise를 사용하는 태스크
successTask().then((result) => {
    console.log('첫 번째 비동기 태스크 성공 : ', result);
}, (error) => {
    console.log('첫 번째 비동기 태스크 실패 : ', error);
});

// reject 되는 프라미스
failTask().then((result) => {
    console.log('두 번째 비동기 태스크 성공 : ', result);
}, (error) => {
    console.log('두 번째 비동기 태스크 실패 : ', error);
});

// catch를 이용해서 실패시의 콜백을 등록할 수 있다.
failTask().then( (result) => {
    console.log('세 번째 비동기 태스크 성공 :', result);
}).catch( (error) => {
    console.log('세 번째 비동기 태스크 실패 :', error);
});