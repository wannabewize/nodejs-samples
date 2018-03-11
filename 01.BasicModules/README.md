# 01.BasicModules
기본 모듈 예제

## Global
전역 객체 예제
- fileLocator : __filename, __dirname 정보 다루기
- add : process의 콘솔 입력 다루기
- process : 프로세스 정보 얻기
- processEvent : 프로세스 전역 객체의 이벤트

## Timer
전역 객체 - 타이머 예제
- timer : 타이머
- interval : 반복

## Console
전역 객체 - 콘솔
- logging : 콘솔을 이용한 정보 출력
- timeMeasure : 콘솔의 time 함수를 이용해서 실행시간 측정하기
- customConsole : 파일로 로그를 기록하는 커스텀 콘솔 만들기

## Util
Util 모듈
- format : 포맷 문자열 생성
- callbackify : 프라미스 기반의 함수를 콜백 기반의 함수 생성
- promisify : 콜백 기반의 함수를 프라미스 기반의 함수 생성
- inherits : 생성자를 이용한 상속으로 deprecated. ES6에서 도입된 class와 extends 사용 권장
- inspector : 객체 상태 출력하기
- classInheritance : ES6의 클래스와 상속, 재정의

## Event
이벤트
- event : 이벤트 핸들러 등록
- eventEmit : 코드로 이벤트 발생시키기
- uncaughtedException : uncaughtedException 에러 이벤트 다루기
- customEvent : 이벤트에 반응할 수 있는 커스텀 클래스 작성하기

## Buffer
버퍼 모듈 예제
- buffer : 버퍼 기본 사용
- buffer_string : 문자열과 버퍼
- buffer_unicode : 이모지와 버퍼
- buffer_data

## Stream
스트림 모듈
- stream_flowing
- stream-pause
- stream-pipe
- stream_stdin_stdout

## FileSystem
파일 시스템 모듈

## Networking
네트워크에 관련된 모듈
- querystring
- request
- url_parsing
- url_making



## Others
- readline : readline 모듈
- os : os 모듈을 이용한 환경 정보 얻기


## Cluster
