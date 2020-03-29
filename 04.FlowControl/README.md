# 비동기 동작과 흐름 제어

## CallbackHell
콜백 지옥

- async_task : 비동기 동작. 연속 사용 실퍠 예
- callbackHell : 콜백 지옥 상황
- callbackhell_esc : 함수 정의로 콜백 레벨 제어

## Promise

Promise에 대한 예제

- file_promise : fs 모듈의 프라미스 기반 API
- file_two_promises : 프라미스 기반으로 비동기 동작 연달아 사용
- file_promise_chain : 프라미스 체인
- promise_object : Promise 객체 생성
- promise_task : Promise를 이용하는 비동기 태스크 만들기
- promise_all : 다수의 비동기 태스크 모두 실행.
- promise_race : 다수의 비동기 태스크 경쟁시키기.
- promise_series : 연속적으로 Promise 사용하기. 이전 비동기 태스크의 결과를 다음 태스크에 전달한다.- promise_all : 다수의 비동기 태스크 실행.
- promisify : 콜백함수를 Promise 기반의 함수로 변환하기. Util 모듈

## AsyncAwait

ES7에 추가된 await-async를 이용한 비동기 태스크 작성 방법.

- await_file : fs모듈의 프라미스 기반 API를 Async Function/await로 사용하기
- await : 프라미스 비동기 태스크 작성/성공과 실패
- await_series : 다수의 비동기 태스크 순차적으로 동작 시키기


## Async
Async 예제

- async_map : 다수의 데이터를 비동기 태스크로 동작/map
