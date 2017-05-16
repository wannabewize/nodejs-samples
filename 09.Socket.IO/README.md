# Socket.IO

## Connection

기본 연결 예제. 연결되면 io 서버에는 connection 이벤트 발생, 클라이언트에는 connect 이벤트 발생

## EchoService

이벤트를 이용한 메세지 에코(echo) 예제

## NameSpace

네임 스페이스 예제. 서버의 콘솔에서 입력한 내용은 system 네임 스페이스로 전송된다.

## ChatService

채팅 서비스 3단계

### ChatService1

Socket.IO를 이용한 채팅 예제

### ChatService2

room을 이용한 채팅방 예제

### ChatService3

채팅방과 메세지 모델을 이용해서, 참여한 채팅방에서 읽지 않은 메세지 전달받기

### ChatService4

MongoDB를 이용한 채팅 서비스. 채팅 메세지를 DB에 기록하는 예제.

#### Socket.IO 이벤트
- connect, connection : 연결 이벤트
- notice : 서버 알림 이벤트
- chatRooms(클라이언트->서버), chatRoomsResult(서버->클라이언트) : 채팅방 목록 이벤트와 목록 응답 이벤트
- joinRoom(클라이언트->서버), joinRoomResult(서버->클라이언트) : 채팅방 입장과 입장 결과 이벤트
- message(클라이언트->서버), messageReceive(서버->클라이언트) : 채팅 메세지 입력과 채팅방 내 채팅 메세지  


#### Socket.IO 이벤트
- ChatService1의 이벤트
- unreadMessage(클라이언트->서버), unreadMessageResult(서버->클라이언트) : 사용자가 채팅방 내 읽지 않은 메세지
- messageRead(클라이언트->서버) : 클라이언트의 메세지 수신 확인 이벤트

## RealtimeSNS

실시간 SNS 예제