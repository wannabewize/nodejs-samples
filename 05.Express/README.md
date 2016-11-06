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
- router_server, router_eating, router_greeting : 라우팅 모듈

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

## MessageBody
 바디파서 모듈을 이용해서 메세지 바디를 사용하는 요청 분석.

- urlencoded : URLEncoded 바디 분석
- json : JSON 메세지 분석

## Multipart
멀티파트 메세지 분석

- Formidable : express-formidable을 이용한 멀티파트 요청 다루기. 임시 파일을 이미지 폴더로 이동. public 폴더에서 bower install 실행
- Multer : 작성 예정