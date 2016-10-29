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


console.log('== 정상 종료');