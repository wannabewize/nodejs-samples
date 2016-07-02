// On - 이벤트 리스너 등록
// ES6. 
process.on('exit', code => {
   console.log('Exit event : ' + code); 
});
/*
process.on('exit', function(code) {
   console.log('Exit event : ' + code);
});
*/


// Once - 이벤트 리스너 등록
process.once('exit', ()=> {
   console.log('Exit 이벤트 최초 발생');
});
/*
process.once('exit', function() {
   console.log('Exit 이벤트 최초 발생');
});
*/

// 이벤트 강제 발생
process.emit('exit');
process.emit('exit', 0);
process.emit('exit', 1);


/**
 * Uncaughted Exception
 */
// ES6
process.on('uncaughtException', ()=>{
   console.log('uncaughtException 발생!');  
});
/*
process.on('uncaughtException', function() {
   console.log('uncaughtException 발생!');   
});
*/

// 없는 함수 실행
justDoIt();
// 예외 상황 발생 이후 코드
console.log('예제 끝');