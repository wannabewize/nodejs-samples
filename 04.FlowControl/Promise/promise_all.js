/**
 * Promise.all을 이용한 다수의 비동기 태스크 실행하기
 * then에는 각 태스크의 결과 전달된다.
 */

// 난수 발생
function randomNumberTask() {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Random Generated', random);
            resolve(random);
        }, 1000)
    });
};

// 100자리, 10자리, 1자리 난수 만들어서 3자리 숫자 만들기
Promise.all([randomNumberTask(), randomNumberTask(), randomNumberTask()])
.then(results => {
    console.log('Promise.all 결과 : ', results);
    const value = results[0] * 100 + results[1] * 10 + results[2];
    console.log(value)
})
.catch(error => {
    console.log('태스크 실패. ', error);
});

