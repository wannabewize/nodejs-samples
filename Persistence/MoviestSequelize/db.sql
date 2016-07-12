CREATE TABLE IF NOT EXISTS movie (
    movie_id INTEGER(4) primary key AUTO_INCREMENT,
    title VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS movie_detail (
    movie_id INTEGER(4),
    director VARCHAR(100),
    year INTEGER(4),
    synopsis TEXT,
    PRIMARY KEY(movie_id),
    FOREIGN KEY(movie_id) REFERENCES movie(movie_id)
);

CREATE TABLE IF NOT EXISTS review (
    review_id INTEGER(4) AUTO_INCREMENT,
    movie_id INTEGER(4),
    review TEXT,
    PRIMARY KEY(review_id),
    FOREIGN KEY(movie_id) REFERENCES movie(movie_id)
);

CREATE TABLE IF NOT EXISTS actor (
    actor_id INTEGER(4) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS staring (
    character VARCHAR(50),
    actor_id INTEGER(4),
    movie_id INTEGER(4),
    FOREIGN KEY(actor_id) REFERENCES actor(actor_id),
    FOREIGN KEY(movie_id) REFERENCES movie(movie_id)
);

