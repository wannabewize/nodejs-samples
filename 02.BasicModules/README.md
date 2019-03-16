# BasicModules
기본 모듈 예제

## OS
운영체제 정보 얻기

- os : 운영체제 정보

## Path
경로 다루기

- path : 경로 정보 얻기, 경로 만들기

## FileSystem
파일 시스템 모듈

- sync_async : 동기/비동기식 API 특징
- file_read : 파일 읽기
- file_read_error : 파일 읽기 에러 처리
- file_read_fd : 파일 디스크립터를 이용해서 파일 읽기
- file_access : 파일 접근 검사
- file_stat : 파일 상태와 정보 얻기
- file_write : 파일에 내용 쓰기
- file_append : 파일 내용 추가
- file_write_fd : 파일 특정 위치에 내용 작성
- file_delete : 파일 삭제
- file_rename : 파일(폴더) 이름 변경
- dir_read : 폴더 읽기
- dir_make_delete : 폴더 생성과 삭제
- watch_dir : 폴더 내 변경 감시
- watch_file : 파일 변경 감시

## Util
Util 모듈

- format : 포맷 문자열 생성
- inspector : 객체 상태 출력하기
- callbackify : 프라미스 기반의 함수를 콜백 기반의 함수 생성
- promisify : 콜백 기반의 함수를 프라미스 기반의 함수 생성

## Event
이벤트 다루기

- eventListener : 이벤트 리스너 등록
- maxEventListner : 이벤트 리스너 개수 얻기/설정
- uncaughtException : 예외 상황 이벤트와 이벤트 리스너
- customEvent : 이벤트에 반응할 수 있는 커스텀 클래스 작성하기
- customEventError : EventEmitter가 아닌 타입에 이벤트 리스너 등록 시도 - 에러 발생

## Buffer
버퍼 모듈 예제
- buffer : 버퍼 기본 사용
- buffer_collection : 배열 방식으로 버퍼 다루기
- buffer_image_detect : 버퍼를 이용해서 파일 포맷 검사
- buffer_readwrite : 버퍼에서 데이터 읽기/쓰기

## Stream
스트림 모듈
- stream_flowing
- stream-pause
- stream-pipe
- stream_stdin_stdout



## Networking
네트워크에 관련된 모듈
- querystring
- request
- url_parsing
- url_making

## Others


## Cluster
