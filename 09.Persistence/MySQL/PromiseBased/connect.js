const mysql = require('mysql2');

const dbConfig = {
    host: "localhost",
    user: "dev",
    password: "1",
    insecureAuth: false,
    port: 3306,    
    database: "example"
 };

 const conn = mysql.createConnection(dbConfig);

conn.connect( (err) => {
   if (err) {
      console.error('DB 연결 실패: ', err);
      return;
   }

   //console.log(conn);
   console.log('DB 연결 성공');
   // 연결 종료
   conn.end();
});