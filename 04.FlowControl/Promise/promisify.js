const util = require('util');

function successTask(callback) {
   setTimeout( () => {
      const random = Math.ceil(Math.round(Math.random() * 9) + 1);
      callback(null, random);
   }, 1000);
}

function failTask(callback) {
   setTimeout( () => {
      callback('Error');
   }, 1000);
}


const promisifiedTask = util.promisify(successTask);

promisifiedTask().then( result => {
   console.log('Promisisy Task Success with', result);   
}).catch( error => {
   console.log(error);
});


util.promisify(failTask)()
.then()
.catch(error => {console.error('FailTask 에러 발생:',error);});