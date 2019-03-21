const async = require('async');

const array = [1, 2, 3, 4, 5];

const makeDouble = (item) => {
   return new Promise( (resolve, reject) => {
      setTimeout( () => {
         console.log(`makeDouble works. input : ${item} , output : ${item*2}`)
         resolve(item * 2);
      }, 1000);
   });
}

// async.eachSeries(array, makeDouble, (error, results) => {
//    if ( error ) {
//       console.log('Error : ', error.message);
//       return;
//    }
//    console.log('async.eachSeries Done : ', results);
// });


async.eachSeries(array, async (item) => {
   const doubled = await makeDouble(item);
   return doubled;
}, (error, results) => {
   if ( error ) {
      console.log('Error : ', error.message);
      return;
   }
   console.log('async.eachSeries Done : ', results);
});
