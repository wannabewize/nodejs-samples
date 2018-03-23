# Express 예제
Express 예제

## Middleware
미들웨어 예제

- middleware : Express 서버와 미들웨어. 요청 분석
- middleware_next : 연속된 미들웨어 사용하기
- responses : 다양한 응답 처리 함수

## Routing
라우팅 예제

- routing : 경로와 메소드를 이용한 라우팅
- routing_params : 라우팅 파라미터
- routing_reg : 정규식을 이용한 라이팅
- externalRouter, router_eating, router_greeting : 라우팅 모듈을 별도로 작성하기

## ErrorHandling
에러 다루기

- errorHandling : 에러 처리
- addService : 두 값을 더하는 서비스. 입력값이 잘못되면 에러.
- env : 동작 환경(development, production) 별 에러 다루기

## UsefulMiddleware
유용한 미들웨어 소개

- staticFiles : 정적 파일처리 미들웨어
- faviconAndLog : 파비콘과 로그 미들웨어
- methodOverride : HTML폼에서 Delete/Put 등의 메소드 사용하기
- morgan : 로그 남기기
- bodyParser_urlencoded : URLEncoded 바디 분석
- bodyParser_json : JSON 메세지 분석

## FileUpload
멀티파트 메세지 분석

### Formidable
express-formidable을 이용한 멀티파트 요청 다루기. 임시 파일을 이미지 폴더로 이동. public 폴더에서 bower install 실행

### Multer
Multer 를 이용한 파일 업로드 예제

## AwaitExpress
async/await와 Express
- app.js : Promise, Await를 이용한 미들웨어