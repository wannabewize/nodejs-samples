# 인증

## 01.CookieAndSession

- cookie : 쿠키
- session : 세션 
- sessionStore : 세션 스토어

## 02.SimpleAuthWithSession

세션을 이용한 인증 예제. iu/1234
클라이언트 : angular 혹은 HTTP client 사용

- Get /public : 공개된 API. 인증 여부와 관계없이 접근 가능
- Get /private : 인증이 필요한 API. 인증된 상태가 아니면 401 에러
- Post /login : 로그인. 로그인 성공하면 세션에 기록한다.
- Delete /logout : 로그아웃. 세션 정보 삭제

## 03.JWT

- token : JWT 토큰 생성/검증하기

## LocalAuth
Passport를 이용한 Local Auth Strategy를 사용한 예제

### LocalAuth_Step1
### LocalAuth_Step2
### LocalAuth_Step3

- customAuthResponse : json응답

## FBAuth
Facebook OAuth를 이용한 인증 예제


## SSL

인증서/개인키 생성 방법

openssl req -nodes -new -x509 -keyout server.key -out server.cert