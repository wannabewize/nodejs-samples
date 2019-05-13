# Persistence

## MySQL
MySQL

### Basic

MySQL 콜백 기반의 모듈 예제

- connection : 데이터베이스 커넥션
- connectionModule, connectionPool : 데이터베이스 커넥션 풀 모듈과 사용하기
- connectionPoolError : 커넥션 풀에서 오류(커넥션 반환 안함)
- CRUD : 기본 CRUD 예제
- movieModel, modelController : 데이터베이스를 다루는 모델과 컨트롤러
- movieService : movieModel을 이용하는 Express 서버


### Promise Based

프라미스 기반의 MySQL 모듈 사용

- connectionPromise : promise-mysql 모듈을 이용해서 커넥션 풀, 커넥션 얻기
- CRUD : promise-mysql 모듈을 이용한 CRUD 예제

### Injection Attack

SQLInjection 의 상황과 방지

- attack : SQL Injection 공격의 예, 방지하기

### Sequelize

도큐먼트 보기 : [링크](http://docs.sequelizejs.com)

#### 데이터베이스 준비

데이터베이스 생성

    `CREATE DATABASE sequelize_example;`

#### 예제

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

- moviest, movieModel : 모델을 이용한 기본 CRUD. 
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
