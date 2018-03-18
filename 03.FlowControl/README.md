# 비동기 동작과 흐름 제어

## CallbackHell
콜백 지옥
- callbackHell : 콜백 지옥 상황
- callbackhell_esc : 함수 정의로 콜백 레벨 제어

## Async
Async 예제
- async_series : 비동기 태스크를 순차적으로 실행
- async_waterfall : 비동기 태스크의 결과를 다음 비동기 태스크로 입력
- async_parallel : 비동기 태스크 동시 실행
- async_each, async_eachSeries : 콜렉션과 비동기 태스크

## Promise

Promise에 대한 예제

- promise : Promise 객체 생성과 동작 방법 
- promise_task : Promise를 이용하는 비동기 태스크 만들기
- promisify : 콜백함수를 Promise 기반의 함수로 변환하기. Util 모듈
- promise_series : 연속적으로 Promise 사용하기. 이전 비동기 태스크의 결과를 다음 태스크에 전달한다.
- promise_race : 다수의 비동기 태스크 경쟁시키기.
- promise_all : 다수의 비동기 태스크 실행.

## Await

ES7에 추가된 await-async를 이용한 비동기 태스크 작성 방법. Promise를 먼저 익혀야한다.

- await : Await/Await를 이용한 비동기 태스크 작성
- await_series : 다수의 비동기 태스크 순차적으로 동작 시키기
- await_all : 다수의 비동기 태스크를 동시 실행

