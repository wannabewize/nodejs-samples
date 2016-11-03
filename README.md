# Node-Samples
TAcademy Node.js 과정 샘플

## 01.BasicModules
기본 모듈 예제

### Global
전역 객체
- add : process의 콘솔 입력 다루기
- console : 콘솔을 이용한 정보 출력, 시간 측정
- process : 프로세스 정보 얻기

### Util
Util 모듈
- format : 포맷 문자열 생성
- inherits : 생성자를 이용한 클래스 상속
- inspector : 객체 상태 출력하기
- classAndInheritance : ES6의 클래스와 상속

### Event
이벤트
- customEvent, customEvent_es5 : EventEmitter 자식 클래스로 커스텀 이벤트 다루기
- event : 이벤트 핸들러 등록
- eventEmit : 이벤트 코드로 발생시키기
- uncaughtedException : uncaughtedException 에러 이벤트 다루기

### Buffer
버퍼 모듈 예제
- buffer : 
- buffer_data
- buffer_unicode
- buffer_string

### Stream
스트림 모듈
- stream_flowing
- stream-pause
- stream-pipe
- stream_stdin_stdout

### FileSystem
파일 스스템 모듈

### Networking
네트워크에 관련된 모듈
- querystring
- request
- url_parsing
- url_making

### Cluster

### Timer
타이머 예제
- timer : 타이머
- interval : 반복

### Others
- readline : readline 모듈
- os : os 모듈을 이용한 환경 정보 얻기

## 02.CustomModule
커스텀 모듈 만들기
- function_module : 함수 단위의 모듈
- object_module : 객체 단위의 모듈
- class_module : 클래스를 이용한 모듈
- constructor_module, constructors_module : Constructor로 작성한 모듈
- app : 모듈 동작시키기

## 03.FlowControl
비동기 동작과 흐름 제어

### CallbackHell
콜백 지옥
- callbackHell : 콜백 지옥 상황
- callbackhell_esc : 함수 정의로 콜백 레벨 제어

### Async
Async 예제
- async_series
- async_parallel
- async_waterfall

### Promise
Promise 예제
- asyncTask : 성공과 실패 콜백을 사용하는 비동기 태스크
- promise : Promise 작성
- promise_task : Promise를 반환하는 태스크
- promise_series
- promise_race
- promise_all

## 04.HTTP
http 모듈을 이용한 예제

### Basic
- helloWorld : Hello World 출력하는 HTTP 서버
- calculation : 쿼리 문자열을 이용한 값 계산
- staticFileService : 정적 파일 서비스
- htmlServer : css/image를 포함한 HTML 서비스
- responsePipe : 응답 객체 파이프라인

### Error
에러 상황인 서버
- endlessResponse : 응답이 끊나지 않는 서버
- headerSendError : 바디와 헤더 보내기 에러
- portOpenError : 포트 오픈 에러

### Post
Post 요청
- prg-pattern : Post-Redirect-Get 패턴
- urlencoded : URLEncoded 방식의 Post 요청
- jsonRequest : JSON 방식의 Post 요청

### Multipart
- multipartRequest : 멀티파트 메세지 분석
- formidable : formidable 모듈
- favoritePaint : 그림과 제목 서비스

## 05.Express
Express 예제

### Routing


### Loggin

1. Multipart : 멀티파트 업로드 예제. express-formidable, Angular
1. Routing : 라우팅 예제
1. Template : EJS, Pug 템플릿 엔진 예제

### Multipart




## 06.FrontEnd
프론트 엔드

### EJS
Express의 템플릿 엔진 EJS

### Pug
Express의 템플릿 엔진 Pug

### jQuery
jQuery를 이용한 프론트 엔드와 서버 통신

### Angular
Angular를 이용한 프론트 엔드와 서버 통신

## 07.REST Service
JSON, XML 요청/응답 예제

### RESTful
REST 기반의 서비스 작성 예제

## 08.Persistence
MySQL과 MongoDB 예제

## 09.Socket.io
Socket.io를 이용한 실시간 서비스 작성

1. Connection : Socket.IO 서버와 클라이언트 연결
1. EchoService : 에코 서비스 예제
1. ChatService : 채팅 서비스 예제
1. RealtimeSNS : 실시간 소셜 네트워크
1. RealtimeSNS2 : 실시간 소셜 네트워크 + 인증


## 10.Socket
소켓을 이용한 실시간 서비스 작성

### net 모듈
TCP를 이용한 실시간 통신

### dgram 모듈
UDP를 이용한 실시간 통신

## 11.Auth
Passport를 이용한 Local Auth Strategy를 사용한 예제

1. CookieaAndSession : 세션과 쿠키. Express-session, CookieParser
1. SimpleAuthWithSession : Express-session 모듈을 이용한 인증 예제
1. LocalAuth : LocalAuth 예제
1. DeviceIDAuth : 기기 ID를 이용한 Auth 예제
1. FBAuth, FBMobileAuth, FBWebAuth : 페이스북 인증 예제

## 12.Testing
테스팅 예제

## 13.Running
서버 운영

## 14.Messaging
GCM 예제

## 15.Mail, Crawling

### Mail
메일 발송 예제

### Crawling
크롤링

## 16.AWS
아마존 S3 업로드와 접근 예제

## Angular
Angular 예제

## MEAN Stack
Mongo, Express, Angular, Node.js  

## Secure
보안을 위한 crpty 모듈 예제, https 모듈 예제
















