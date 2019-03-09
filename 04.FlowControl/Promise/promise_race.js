/**
 * Promise.race를 이용한 다수의 비동기 태스크 동작시키기
 * 다수의 태스크 중 먼저 끝난 태스크가 then으로 실행. then은 1회만 실행
 */

// 비동기 태스크1. 0~9 사이의 난수 결과
function task(name) {
    return new Promise((resolve, reject) => {
        console.log(`Task${name} started`);

        const random = Math.ceil(Math.round(Math.random() * 3) + 1);
        const time = random * 1000;
        
        setTimeout(() => {
            console.log(`Task${name} random number : ${random}`);
            if ( random % 2 == 0 ) {
                resolve(random);
            }
            else {
                reject(`Task${name}'s random number is odd`);
            }
        }, time)
    });
};


Promise.race([task('1'), task('2'), task('3')])
    .then(results => {
        console.log('Race Task 종료 : ', results);
    })
    .catch(error => {
        console.log(error);
    });