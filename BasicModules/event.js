// On - 이벤트 리스너 등록
process.on('exit', function(code) {
   console.log('Exit event : ' + code);
});


// Once - 이벤트 리스너 등록
process.once('exit', function() {
   console.log('Exit 이벤트 최초 발생');
});

// 이벤트 강제 발생
process.emit('exit');
process.emit('exit', 0);
process.emit('exit', 1);


/**
 * Uncaughted Exception
 */
process.on('uncaughtException', function() {
   console.log('uncaughtException 발생!');   
});

// 없는 함수 실행
justDoIt();