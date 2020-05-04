# Persistence

데이터베이스를 이용한 영속성 서비스

## MySQL

MySQL 혹은 MariaDB를 사용한다.

### MySQL 준비

MySQL 8.0 이후에 기본 적용된 인증 플러그인 호환성 문제 발생. MariaDB는 문제 없음.

#### 인증 플러그인 변경

인증 플러그인을 caching_sha2_password -> mysql_native_password 변경

    `alter user 'root'@'%' identified with mysql_native_password by 'password';`

#### 유저 생성과 권한

dev 유저 만들기

    `mysql> create user 'dev'@'*';`

dev 유저의 인증 방식을 예정 방식(mysql-native)로. 새로운 방식을 모듈에서 지원 안함

    `mysql> ALTER USER 'dev'@'*' IDENTIFIED WITH mysql_native_password BY 'secret';`

example 데이터베이스 생성

    `mysql> create database example;`

dev 유저에 example 데이터베이스 다루기 권한 주기

    `mysql> grant all on example.* to 'dev'@'*';`

### Basic 예제

mysql2 모듈을 이용한 데이터베이스 다루기

- insert : 데이터 추가(INSERT)

#### 01.Connection

커넥션 예제

- connect : 데이터베이스 연결하기. Callback, Promise, Async/Await
- connectionPool1, connectionPool2 : 커넥션 풀
- connectionPoolWait : 커넥션 풀의 커넥션 관리 정책
- dbConnect, App : 커넥션 모듈과 사용 모듈

#### 02.Basic

기본 CRUD

- insert : INSERT SQL 구문을 이용한 데이터 추가
- select : SELECT SQL 구문을 이용한 데이터 조회
- update : UPDATE SQL 구문을 이용한 데이터 수정
- delete : DELETE SQL 구문을 이용한 데이터 삭제

- movieModel, movieRouter, movieServer, movieController : 영화 정보 서비스 아키텍쳐 


### Injection Attack

SQLInjection 의 상황과 방지

- attack : SQL Injection 공격의 예, 방지하기

### Sequelize

도큐먼트 보기 : [링크](http://docs.sequelizejs.com)

#### 데이터베이스 준비

데이터베이스 생성

    `CREATE DATABASE sequelize_example;`

#### 예제

- connect : 연결하기
- model : 모델 정의하고 데이터베이스에 반영
- crud : 영화 정보 CRUD. 코드 내 실행 순서 참고
- relations : One To One, One To Many 관계, Many to Many는 작성 예정
- rawQuery : SQL을 직접 실행하기


## MongoDB

### MongoDB 기본

데이터베이스 동작

`$ mongod --dbpath ./db`

데이터 확인

```` 
> show dbs;
> use example;
> show collections;
> db.movies.find();
````

### Basic

기본 CRUD

- connect, connect2 : 데이터베이스 연결하기
- insert : 콜렉션에 데이터 추가
- find : 콜렉션에서 도큐먼트 얻기
- findById : ObjectID를 이용해서 도큐먼트 얻기
- count : 콜렉션 내 도큐먼트 수
- update : 도큐먼트 수정
- delete : 도큐먼트 삭제

### ModelArchitecture

도큐먼트 내장/배열 사용하기

- array : 배열을 정의한 도큐먼트에서 데이터 얻기. 태그 검색
- embeded : 도큐먼트 내장

### Mongoose

데이터 확인
````
> use mongoose;
> db.movies.find()
````
- basic : 스키마 정의, 모델을 이용해서 저장하기
- movieModel, movieCRUD : 모델을 이용한 기본 CRUD. 
- errors : 스키마와 모델, 모델 생성시 에러 발생 경우
- method : 스키마에 정의하는 Instance Method, Static Method

### MongoosePostReply

Mongoose를 이용한 글과 댓글 쓰기. 댓글은 글(post) 도큐먼트의 배열로 저장된다.

### MoviestMongoDB

작성중


### FindAndPagingMongoDB

페이지네이션과 검색(FindAndPagingMongoDB)

- initialData : 초기 데이터 입력
- server : 서버

사용 방법

http://localhost:3000/list?page=2
http://localhost:3000/list?page=3&keyword=1
