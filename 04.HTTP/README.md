# http 모듈 예제

## Basic
- helloWorld : Hello World 출력하는 HTTP 서버
- urlAnalysis : 요청 메세지의 URL 분석

- calculation : 쿼리 문자열을 이용한 값 계산
- staticFileService : 정적 파일 서비스
- htmlServer : css/image를 포함한 HTML 서비스
- responsePipe : 응답 객체 파이프라인

## Error
에러 상황인 서버
- endlessResponse : 응답이 끊나지 않는 서버
- headerSendError : 바디와 헤더 보내기 에러
- portOpenError : 포트 오픈 에러

## Post
Post 요청
- prg-pattern : Post-Redirect-Get 패턴
- urlencoded : URLEncoded 방식의 Post 요청
- jsonRequest : JSON 방식의 Post 요청

## Multipart
- multipartRequest : 멀티파트 메세지 분석
- formidable : formidable 모듈
- favoritePaint : 그림과 제목 서비스