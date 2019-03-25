/**
 * 비동기 태스크를 연속 동작시키기
 * 난수 3개를 이용해서 3자리 난수 만들기.
 * Task1은 100자리의 난수, Task2는 10자리의 난수, Task3는 1자리 난수를 만든다.
 * Task1의 결과를 Task2에 전달, Task2의 결과를 Task3전달한다.
 * 난수가 짝수가 나오면 성공/홀수가 나오면 실패
 */

// 100 자리에 사용할 난수 발생
function task1() {    
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task1 Random', random);
            const task1Result = random * 100;
            resolve(task1Result);
        }, 1000)
    });
};

// 10자리에 사용할 난수 발생
function task2(number) {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {  
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task2 Random', random);
            const task2Result = number + random * 10;
            resolve(task2Result);
        }, 1500)
    });
}

// 1자리에 사용할 난수 발생
function task3(number) {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {            
            // 1 자리의 난수     
            const random = Math.ceil(Math.round(Math.random() * 9) +1);
            console.log('Task3 Random', random);
            const task3Result = number + random;     
            resolve(task3Result);
        }, 1500)
    });
}

task1()
.then( task2 )
.then( task3 )
.then( result => {
    console.log('All Task Done with', result);
}).catch( taskError => {
    console.log(taskError);
});