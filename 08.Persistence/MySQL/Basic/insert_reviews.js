/**
 * 리뷰 추가.
 * 임의의 영화를 하나 선택하고, 3개의 임의의 리뷰를 추가한다.
 */
const async = require('async');
const pool = require('./dbConnection');

pool.getConnection(function(err, conn) {
   if ( err ) {
      console.error('Error', err);
      return;
   }
   
   // 임의의 1개 로우 선택
   const sql = 'SELECT movie_id, title FROM movies ORDER BY RAND() LIMIT 1;'
   conn.query(sql, function(err, result) {
      if ( err ) {
         console.error('Error', err);
         return;
      }
      
      const movieId = result[0].movie_id;
      const title = result[0].title;
      
      console.log('임의로 선택한 영화, 제목 : ' + title + ' ID : ' + movieId);

      const reviews = [];
      for(var i = 0 ; i < 3 ; i++) {
         // 랜덤 리뷰 글 생성
         const str = '잘 봤어요~! ' + Math.floor(Math.random() * 10000);
         reviews.push(str);
      }
   
      // async.each를 이용한 3개의 리뷰를 등록   
      async.each(reviews,
         function(item, callback) {
            const review = {
               movie_id : movieId,
               review : item
            };
            const insertSql = 'INSERT INTO review SET ?';
            conn.query(insertSql, review, function(err, result) {
               console.log(title + '에 리뷰 ' + review.review + ' 등록');
               if ( err ) {               
                  return callback(err);
               }
               callback();
            });         
         },
         function(err) { // async.each의 최종 콜백
            if ( err ) {
               console.error('리뷰 등록 에러 ', err);
            }
            else {
               console.log('리뷰 등록 성공');
            }
            conn.release();
            pool.end();
         }
      );      
   });   
});
