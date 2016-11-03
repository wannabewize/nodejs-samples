drop table Starings;
drop table Reviews;
drop table Actors;
drop table Movies;

INSERT INTO `Movies` VALUES (1,'아이언맨','존 파브르',2008);
INSERT INTO `Movies` VALUES (2,'캡틴 아메리카 퍼스트 어벤져','조 존스톤',2011);
INSERT INTO `Movies` VALUES (3,'어밴저스','조스웨던',2012);
INSERT INTO `Movies` VALUES (4,'아이언맨3','존 파브르',2013);
INSERT INTO `Movies` VALUES (5,'어밴저스 에이지 오브 울트론','조스웨던',2015);
INSERT INTO `Movies` VALUES (6,'캡틴 아메리카 시빌워','앤소니 루소',2016);

SELECT * FROM movies;

INSERT INTO reviews (movie_id, review) VALUES (1, '아이언맨 리뷰1');
INSERT INTO reviews (movie_id, review) VALUES (1, '아이언맨 리뷰2');
INSERT INTO reviews (movie_id, review) VALUES (1, '아이언맨 리뷰3');
INSERT INTO reviews (movie_id, review) VALUES (2, '캡틴 아메리카 리뷰1');
INSERT INTO reviews (movie_id, review) VALUES (2, '캡틴 아메리카 리뷰2');

SELECT * FROM reviews;

INSERT INTO actors VALUES (1, '로다주');
INSERT INTO actors VALUES (2, '기네스펠트로');
INSERT INTO actors VALUES (3, '크리스 에반스');
INSERT INTO actors VALUES (4, '스칼렛 요한슨');
INSERT INTO actors VALUES (5, '휴고위빙');

SELECT * FROM actors;

# character, actor, movie
INSERT INTO starings VALUES ('토니 스타크',1, 1); # 로다주, 아이언맨
INSERT INTO starings VALUES ('페퍼',2, 1); # 기네스펠트로, 아이언맨

INSERT INTO starings VALUES ('스티브 로저스',3, 2); # 크리스 에반스, 캡틴 아메리카
INSERT INTO starings VALUES ('요한 슈미트',5, 2); # 휴고 위빙, 캡틴 아메리카

INSERT INTO starings VALUES ('토니 스타크',1, 3); # 로다주, 어밴져스
INSERT INTO starings VALUES ('스티브 로저스',3, 3); # 기네스펠트로, 어밴져스
INSERT INTO starings VALUES ('나타샤 로마노프',4, 3); # 스칼렛 요한슨, 어밴져스

INSERT INTO starings VALUES ('토니 스타크',1, 4); # 기네스펠트로, 아이언맨3
INSERT INTO starings VALUES ('페퍼',2, 4); # 스칼렛 요한슨, 아이언맨3

INSERT INTO starings VALUES ('토니 스타크',1, 5); # 로다주, 어밴져스2
INSERT INTO starings VALUES ('스티브 로저스',3, 5); # 기네스펠트로, 어밴져스2
INSERT INTO starings VALUES ('나타샤 로마노프',4, 5); # 스칼렛 요한슨, 어밴져스2

INSERT INTO starings VALUES ('토니 스타크',1, 6); # 로다주, 캡틴 어메리카 시빌워
INSERT INTO starings VALUES ('스티브 로저스',3, 6); # 기네스펠트로, 캡틴 어메리카 시빌워
INSERT INTO starings VALUES ('나타샤 로마노프',4, 6); # 스칼렛 요한슨, 캡틴 어메리카 시빌워

SELECT * FROM starings;