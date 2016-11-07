# Persistence

## MySQL
MySQL

### Basic

#### 데이터베이스 준비

데이터베이스(mysql_example) 생성과 테이블(Movies,  Reviews) 테이블 생성<br>
mysql -u root -p < moviest.sql

#### 예제

- connection : 데이터베이스 커넥션
- dbConnection, connectionPool : 데이터베이스 커넥션풀. 
- insert_movie : 영화 데이터 추가. Placeholder 사용 
- select_movies : SELECT로 데이터 얻기
- insert_review : 영화와 리뷰. 리뷰 추가
- select_reviews : 영화의 리뷰 얻기


### Sequelize

#### 데이터베이스 준비
1. 데이터베이스 : sequelize_example 사용<br>
CREATE DATABASE sequelize_example;

#### 예제
- model : 모델 정의하고 데이터베이스에 반영
- crud : 영화 정보 CRUD. 코드 내 실행 순서 참고

### MoviestMySQL
MySQL을 이용한 영화 정보 서버

#### 데이터베이스 준비 

1. 데이터베이스(moviest)와 테이블 준비<br>
mysql -u root -p < moviest.sql
1. 초기 데이터 입력<br>
mysql -u root -p < initialData.sql

### MoviestSequelize
준비중


### FindAndPagingMySQL
MySQL을 이용한 페이지네이션과 검색. 데이터베이스 mysql_example 사용

- prepare : 테이블 생성과 초기 데이터 300건 입력

http://127.0.0.1:3000/items?page=2&count=10&keyword=1