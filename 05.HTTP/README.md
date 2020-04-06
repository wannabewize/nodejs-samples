# http 모듈 예제

## Basic
기본 HTTP 서버 생성, 요청 분석과 응답

- helloWorld : Hello World 출력하는 HTTP 서버
- request : 요청 메세지(IncomingMessage)
- request_url : 요청 메세지의 URL 분석
- response_header : setHeader로 응답 메세지 헤더 작성
- response_header2 : writeHead 함수로 응답 메세지 헤더 작성
- response_body : 응답 메세지 바디 작성
- response_file : 파일에서 응답
- response_file2 : 파일 접근 검사하고 파일로 응답/에러
- response_various : 경로를 이용해서 다양한 요청 다루기

## Post
Post 요청 다루기.

- post_contentType : 컨텐트 타입 식별하기
- post_urlencoded : url encoded 방식의 POST 요청 처리
- post_json : JSON 요청 메세지 처리

- prg-pattern : Post-Redirect-Get 패턴
- post_multipart_message : 멀티파트 메세지 구조 보기
- post_multipart_formidable : formidable 모듈로 멀티파트 메세지 분석
- post_multipart_code : 모듈 없이 멀티파트 메세지 분석

- bodyAnalysis : 바디 메세지 분석 - Post 파트에서 다룬다.
- sumService.js : 1~Number 까지 덧셈 서비스

## Error
에러 상황

- endlessResponse : 응답이 끊나지 않는 서버
- headerSendError : 바디와 헤더 보내기 에러
- portOpenError : 포트 오픈 에러

