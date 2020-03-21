// 값 출력하기
const intValue = 3;
console.log('int Value ' + 3);

// 객체 출력하기
const movie = {
   title: "새로운 희망",
   year: 1977
};
console.log(movie);
// movie:[object Object]
console.log('movie: ' + movie); 
// movie: { title: '새로운 희망', year: 1977 }
console.log('movie:', movie); 

// 배열 출력하기
const array = [1, 2, 3];
console.log('array : ' + array);
console.log('array : ' , array);

// 에러 - 스택 정보 출력
const error = new Error('Error');
console.log('Error : ', error.stack);

// 메세지 출력 레벨
console.log('log', 'log message');
console.info('info', 'info message');
console.warn('warn', 'warn message');
console.error('error', 'error message');
