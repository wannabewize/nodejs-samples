const mysql = require('mysql');

const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   waitForConnections: false,
   database: 'example'
};

const pool = mysql.createPool(dbConfig);

for ( var i = 0 ; i < 20; i++) {
   var count = 0;
   pool.getConnection( (err, conn) => {
      if ( err ) {
         console.log('pool.getConnection error', err);
         return;
      }
      // conn.release();
      console.log(`getConnection ${count++} success`);
   });
}
