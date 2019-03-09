/**
 * Promise.all을 이용한 다수의 비동기 태스크 실행하기
 * then에는 각 태스크의 결과 전달된다.
 */

// 100 자리에 사용할 난수 발생
function task1() {
    return new Promise((resolve, reject) => {        
        console.log('Task1 start');
        setTimeout(() => {
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task1 Random', random);
            if ( random % 2 == 0 ) {
                const task1Result = random * 100;
                resolve(task1Result);
            }
            else {
                reject('Task1 Error : Odd Number');
            }
        }, 1000)
    });
};

// 10자리에 사용할 난수 발생
function task2() {
    return new Promise((resolve, reject) => {       
        console.log('Task2 start'); 
        setTimeout(() => {  
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task2 Random', random);
            if ( random % 2 == 0 ) {
                const task2Result = random * 10;
                resolve(task2Result);
            }
            else {            
                reject('Task2 Error : Odd Number');
            }
        }, 2000)
    });
}

// 1자리에 사용할 난수 발생
function task3() {
    return new Promise((resolve, reject) => {       
        console.log('Task3 start'); 
        setTimeout(() => {            
            // 1 자리의 난수     
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task3 Random', random);
            if ( random % 2 == 0 ) {
                const task3Result = random;     
                resolve(task3Result);
            }
            else {            
                reject('Task3 Error : Odd Number');
            }
        }, 1500)
    });
}

Promise.all([task1(), task2(), task3()])
    .then(results => {
        console.log('모든 태스크 성공. ', results);
    })
    .catch(error => {
        console.log('태스크 실패. ', error);
    });

