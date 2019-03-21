/**
 * Applies the function iteratee to each item in coll, in parallel
 * 동시 실행. 순서 보장 안됨. 결과 전달 없음.
 */
const async = require('async');

const makeDouble = (item) => {
   return new Promise( (resolve, reject) => {
      setTimeout( () => {
         resolve(item * 2);
      }, 1000);
   });
}

const array = [1, 2, 3, 4, 5];

async.each(array, async (item, callback) => {
   const doubled = await makeDouble(item);
   console.log('doubled : ', doubled);
}, (err) => {
   console.log('err :', err);
});