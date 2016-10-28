console.log('argv 개수 : ', process.argv.length);

console.log('0번째 : ', process.argv[0]); // node 명령어
console.log('1번째 : ', process.argv[1]); // js 파일

// 파라미터로 입력한 값의 합 구하기
var sum = 0;
for( var i = 2 ; i < process.argv.length ; i++ ) {
   var arg = process.argv[i];
   var value = parseInt(arg);
   // 숫자만 더하기
   if ( value != NaN ) {
      sum += value;
   }
}

console.log('Sum : ' + sum);