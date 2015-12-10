new Promise(function(fullfill, reject) {
   console.log('태스크 1 시작');
   setTimeout(function() {
      console.log('태스크 1 종료');
      fullfill('태스크 1 결과');
      // reject(new Error('Promise Error'));
         
   }, 2000);
}).then(fullfilled);

function fullfilled(result) {
   console.log('Fullfilled : ', result);
}

function rejected(err) {
   console.error('에러 : ', err);
}