const async = require('async');

const array = ['hello', 'World', 'I kike', 'Node.js'];

async.eachSeries(array, (item, next) => {
   console.log('Task Start : ', item);
   setTimeout(()=>{
      console.log('Task done : ', item);
      next(null, item);
   }, 1000);
}, (error, results) => {
   if ( error ) {
      console.log('Error : ', error.message);
      return;
   }
   console.log('async.eachSeries Done : ', results);
});
