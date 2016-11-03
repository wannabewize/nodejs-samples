var mysql = require('mysql');

var dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   database: 'movies'
};
var conn = mysql.createConnection(dbConfig);

conn.connect(function(err) {
   if ( err ) {
      console.error('Connection Error');
      return;         
   }
   
   var userInput = 'ㅇ';
   
   var chars = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'];
   var consonant = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
   
   var index = consonant.indexOf(userInput);
   
   // 경계 조건 필요 ㅎ입력시      
   var sql = 'select * from movies where title >= ? and title < ?';
   conn.query(sql, [chars[index], chars[index+1]], function(err, results) {
      if ( err ) {
         return;         
         console.error('Query Error');
      }
      
      console.log('Result : ', results);
      conn.end();
   });
});