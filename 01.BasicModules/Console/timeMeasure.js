/**
 * console의 time 함수를 이용해서 실행시간 측정하기
 */
// 시간 측정
var num = 10000;
var primeNumbers = [];

// 시간 측정 시작
console.time('PRIME NUMBER');

for(var i = 1 ; i < num ; i ++ ) {
   var isPrimeNumber = true;
   // TODO : i의 제곱근보다 커지면 더 이상 비교할 필요는 없다.
   for(var j = 2 ; j < i ; j++) {
      if ( i % j == 0 ) {
         isPrimeNumber = false;
         break;
      }
   }
   if ( isPrimeNumber ) {
      primeNumbers.push(i);
   }
}

// 시간 측정 시작
console.log(`Prime Numbers : ${primeNumbers}`)
console.timeEnd('PRIME NUMBER');