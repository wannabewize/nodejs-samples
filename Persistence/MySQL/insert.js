var pool = require('./dbConnection');

pool.getConnection(function(err, conn) {
   var sql = 'INSERT INTO movies (title, director, year) VALUES ("인셉션", "크리스토퍼 놀란", 2010);';
   conn.query(sql,function(err, results) {
      if ( err ) {
         console.error('INSERT Error', err);
      }
      else {
         console.log('results : ', results);
      }
   });
      
   var sql2 = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
   conn.query(sql2, ['인터스텔라', '크리스토퍼 놀란', 2015],function(err, results) {
      if ( err ) {
         console.error('INSERT Error', err);
      }
      else {
         console.log('results : ', results);
      }
   });   
   
   var data = {
      title : '메멘토',
      director : '크리스토퍼 놀란',
      year : 2000
   };
   var sql3 = 'INSERT INTO movies SET ?';
   conn.query(sql3, data, function(err, results) {
      if ( err ) {
         console.error('INSERT Error', err);
      }
      else {
         console.log('results : ', results);
      }
   });
   
   // 비동기의 연속이므로 release를 호출할 곳이 적당하지 않다.
   // conn.release();
});

