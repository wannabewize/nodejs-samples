# Express 예제
Express 예제

## Middleware
미들웨어 예제

- request : 요청 분석
- routing : 매소드, 경로 별 미들웨어
- response : 응답 작성
- response_error : 응답 작성 시 에러 발생 상황
- middleware_async : 비동기 API, Promise, Await를 이용한 미들웨어를 사용하는 미들웨어 작성
- middleware_next : 연속된 미들웨어 사용, 미들웨어간 데이터 전달


## Routing
라우팅 예제

- routing : 경로와 메소드를 이용한 라우팅
- routing_params : 라우팅 파라미터
- routing_reg : 정규식을 이용한 라이팅
- routing_module, router_eating, router_greeting : 라우팅 모듈을 별도로 작성하기

## UsefulMiddleware
유용한 미들웨어 소개

- staticFiles : 정적 파일처리 미들웨어
- faviconAndLog : 파비콘과 로그 미들웨어
- methodOverride : HTML폼에서 Delete/Put 등의 메소드 사용하기
- morgan : 로그 남기기
- bodyParser_urlencoded : URLEncoded 바디 분석
- bodyParser_json : JSON 메세지 분석

## Multipart
멀티파트 메세지 분석

### Formidable
express-formidable을 이용한 멀티파트 요청 다루기. 임시 파일을 이미지 폴더로 이동. public 폴더에서 bower install 실행

### Multer
Multer 를 이용한 파일 업로드 예제

## ErrorHandling
에러 다루기

- error_handling : 에러 처리
- error_env : 동작 환경(development, production) 별 에러 다루기
- addService : 두 값을 더하는 서비스. 입력값이 잘못되면 에러.
