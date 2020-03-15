const util = require('util');

function task(callback) {
   setTimeout( () => {
      // 난수가 짝수면 성공, 홀수는 실패
      const random = Math.ceil(Math.round(Math.random() * 9) + 1);
      if ( random % 2 == 0 ) {
         callback(null, random);
      }
      else {
         const errorMessage = `Error, random number is ${random}`;
         callback(errorMessage, null);
      }
   }, 1000);
}

const promisifiedTask = util.promisify(task);

promisifiedTask().then( result => {
   console.log('Promisisy Task Success with', result, result2);   
}).catch( error => {
   console.log(error);
});
