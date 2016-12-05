# Socket.IO

## Connection

## EchoService

## NameSpace

## ChatService

채팅 서비스

### ChatService1

Socket.IO의 namespace를 이용한 채팅방 예제

사용자 : 아이유, 설현, 태연, 수지
채팅방 : room1, room2

#### Socket.IO 이벤트
- connect, connection : 연결 이벤트
- notice : 서버 알림 이벤트
- chatRooms(클라이언트->서버), chatRoomsResult(서버->클라이언트) : 채팅방 목록 이벤트와 목록 응답 이벤트
- joinRoom(클라이언트->서버), joinRoomResult(서버->클라이언트) : 채팅방 입장과 입장 결과 이벤트
- message(클라이언트->서버), messageReceive(서버->클라이언트) : 채팅 메세지 입력과 채팅방 내 채팅 메세지  

### ChatService2

채팅방에 입장한 사용자 별 메세지 수신 기록. 채팅방에 재입장하면 그 동안 못받은 메세지를 수신한다.

#### Socket.IO 이벤트
- ChatService1의 이벤트
- unreadMessage(클라이언트->서버), unreadMessageResult(서버->클라이언트) : 사용자가 채팅방 내 읽지 않은 메세지
- messageRead(클라이언트->서버) : 클라이언트의 메세지 수신 확인 이벤트