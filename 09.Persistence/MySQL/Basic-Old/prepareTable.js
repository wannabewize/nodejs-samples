const mysql = require('mysql');

const fs = require('fs');
const config = fs.readFileSync('./dbConfig.json');
const dbConfig = JSON.parse(config);
dbConfig.multipleStatements = true; // drop, create 쿼리를 모두 실행하기 위한 옵션

var conn = mysql.createConnection(dbConfig);

// multiline string
let sql = `
DROP TABLE if exists movies;
DROP TABLE if exists reviews;

CREATE TABLE if not exists movies (
	movie_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50),
	director VARCHAR(50),
	year INT,
	synopsis VARCHAR(255)
);

CREATE TABLE if not exists reviews (
	movie_id int,
	review VARCHAR(255),
	FOREIGN KEY(movie_id) REFERENCES movies(movie_id)
);
`;

conn.query(sql, (err, result) => {
   if ( err ) {
      console.error('Error : ', err);
      return;
   }
   console.log('Table prepration completed!');
   conn.end();
});