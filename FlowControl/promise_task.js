'use strict'

function task(success) {
   return new Promise(function(fullfill, reject) {
      if ( success )
         fullfill('Success');
      else
         reject('Error');
   });
}

// Promse를 사용하는 태스크
task(true).then(
   function(result) {
      console.log('Fullfilled : ', result);   
   }, function(err) {
      console.log('Rejected : ', err);
   }
);

// reject 되는 프라미스
task(false).then(
   function(result) {
      console.log('Fullfilled : ', result);   
   }, function(err) {
      console.log('Rejected : ', err);
   }
);
