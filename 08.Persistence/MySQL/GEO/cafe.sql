use cafe;

CREATE TABLE cafes 
(
   cafe_id    INT PRIMARY KEY AUTO_INCREMENT,
   title      varchar(50),
   location   geometry
);
