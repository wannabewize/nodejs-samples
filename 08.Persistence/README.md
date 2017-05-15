# Persistence

## MySQL
MySQL

### Basic

#### 데이터베이스 준비

데이터베이스(mysql_example) 생성과 테이블(Movies,  Reviews) 테이블 생성 : `mysql -u root -p < moviest.sql`

#### 예제

- connection : 데이터베이스 커넥션
- dbConnection, connectionPool : 데이터베이스 커넥션풀. 
- insert_movie : 영화 데이터 추가. Placeholder 사용 
- select_movies : SELECT로 데이터 얻기
- insert_review : 영화와 리뷰. 리뷰 추가
- select_reviews : 영화의 리뷰 얻기
- basicCRUD : 기본CRUD


### Sequelize

#### 데이터베이스 준비
1. 데이터베이스 : sequelize_example 사용 : `CREATE DATABASE sequelize_example;`

#### 예제
- model : 모델 정의하고 데이터베이스에 반영
- crud : 영화 정보 CRUD. 코드 내 실행 순서 참고

### MoviestMySQL
MySQL을 이용한 영화 정보 서버

#### 데이터베이스 준비 

1. 데이터베이스(moviest)와 테이블 준비 :  `mysql -u root -p < moviest.sql`
1. 초기 데이터 입력 : `mysql -u root -p < initialData.sql`

### MoviestSequelize
준비중


### FindAndPagingMySQL
MySQL을 이용한 페이지네이션과 검색. 데이터베이스 mysql_example 사용

- prepare : 테이블 생성과 초기 데이터 300건 입력

http://127.0.0.1:3000/items?page=2&count=10&keyword=1

## MongoDB

### 데이터베이스 동작

데이터베이스 동작 : `$ mongod --dbpath ./db`

데이터 확인

```` 
> show dbs;
> use example;
> show collections;
> db.movies.find();
````

### Basic

- connection : 커넥션
- insert : 콜렉션에 데이터 추가
- find : 콜렉션에서 데이터 얻기
- find_array : 배열을 정의한 도큐먼트에서 데이터 얻기. 태그 검색
- update : 도큐먼트 수정
- delete : 도큐먼트 삭제
- embeded : 도큐먼트 내장


### Mongoose

데이터 확인
````
> use mongoose;
> db.movies.find()
````

- model : 모델과 스키마
- mongoose : 모델을 이용한 CRUD. 


### MoviestMongoDB

작성중


### FindAndPagingMongoDB
페이지네이션과 검색

`작성중`