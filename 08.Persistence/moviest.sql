create TABLE movies (
	movie_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50),
	director VARCHAR(50),
	year INT,
	synopsis VARCHAR(255)
);

CREATE TABLE review (
	movie_id int,
	review VARCHAR(255),
	FOREIGN KEY(movie_id) REFERENCES movies(movie_id)
);