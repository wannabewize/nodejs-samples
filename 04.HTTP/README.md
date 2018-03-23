# http 모듈 예제

## Basic
기본 HTTP 서버 생성, 요청 분석과 응답

- helloWorld : Hello World 출력하는 HTTP 서버
- urlAnalysis : 요청 메세지의 URL 분석
- bodyAnalysis : 바디 메세지 분석 - Post 파트에서 다룬다.
- staticFileService1 : 정적 파일 서비스
- staticFileService2 : 정적 파일 서비스
- staticFileStream : 파일 다루기 비교(readFile vs 스트림)
- sumService.js : 1~Number 까지 덧셈 서비스

## Error
에러 상황

- endlessResponse : 응답이 끊나지 않는 서버
- headerSendError : 바디와 헤더 보내기 에러
- portOpenError : 포트 오픈 에러

## Post
Post 요청

- urlencoded : URLEncoded 방식의 Post 요청
- jsonRequest : JSON 방식의 Post 요청
- prg-pattern : Post-Redirect-Get 패턴

## Multipart
- multipartRequest : 멀티파트 메세지 분석
- formidable : formidable 모듈
- favoritePaint : 그림과 제목 서비스