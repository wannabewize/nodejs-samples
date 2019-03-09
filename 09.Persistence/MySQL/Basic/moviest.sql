create database if not exists mysql_example;

use mysql_example;

CREATE TABLE if not exists movies (
	movie_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50),
	director VARCHAR(50),
	year INT,
	synopsis VARCHAR(255)
);

CREATE TABLE if not exists review (
	movie_id int,
	review VARCHAR(255),
	FOREIGN KEY(movie_id) REFERENCES movies(movie_id)
);