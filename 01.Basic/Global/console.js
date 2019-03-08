// 값 출력하기
var intValue = 3;
console.log('int Value ' + 3);

// 객체 출력하기
var obj = {
   name : 'IU',
   job : 'Singer'
}

console.log('obj : ' + obj); // [object Object]
console.log('obj : ', obj); // { name: 'IU', job: 'Singer' }

// 배열 출력하기
var array = [1, 2, 3];
console.log('array : ' + array);
console.log('array : ' , array);

// 에러 - 스택 정보 출력
var error = new Error('Error');
console.log('Error : ', error.stack);

// 메세지 출력 레벨
console.log('log', 'log message');
console.info('info', 'info message');
console.warn('warn', 'warn message');
console.error('error', 'error message');
