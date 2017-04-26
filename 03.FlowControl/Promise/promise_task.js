/**
 * 프라미스를 사용하는 비동기 태스크 작성하기
 */
function task(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            // 비동기 태스크가 성공(fullfill)하면 resolve 콜백 실행.
            // 결과를 전달하기 위한 파라미터 설정
            resolve('Success');
        }
            else {
                  // 비동기 태스크가 실패(reject)하면 reject 콜백 실행.
                  // 에러 정보를 파라미터로 전달한다.
                  reject('Error');
            }
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
}).catch(failure => {
      console.log('세 번째 비동기 태스크 실패 :', failure);
});