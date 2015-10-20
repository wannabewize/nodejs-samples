var net = require('net');

var clientList = [];
// 클라이언트 목록에서 소켓을 이용해서 클라이언트 정보 찾기   
function findClient(socket) {
   for(var i = 0 ; i < clientList.length ; i++ ) {
      var client = clientList[i];
      if ( client.socket == socket ) {
         return client;
      }
   }
   console.error('Server Error!','Can not find client');
   return null;
}

var server = net.createServer(function (socket) {
   // Connection Event
   console.log('Remote Address : ', socket.remoteAddress);
   
   // 클라이언트와 접속한 소켓을 채팅 클라이언트 목록에 추가
   var nickname = 'Guest' + Math.floor(Math.random()*100);
   clientList.push({nickname:nickname, socket:socket});
   
   socket.write('Welcome to TCP Chat Service, ' + nickname + '\n');
   socket.write('대화명 변경 : \\rename [NAME]\n');
   socket.write('채팅방 종료 : \\close\n');   

   socket.on('data', function (data) {
      var sender = findClient(socket);
      
      var message = data.toString('UTF-8');
      
      if ( message.indexOf('\\rename') != -1 ) {
         var newNickName = data.split(' ')[2];
         console.log(sender.nickname + ' change nickname ' + newNickName);
         sender.nickname = newNickName;
         return;         
      }
      else if ( message.trim() == '\\close' ) {
         sender.socket.close();
         return;
      }
      
      console.log(sender.nickname + ' write ' + message);      
      clientList.forEach(function (client) {
         var socket = client.socket;
         // 글 작성자에게는 보내지 않는다.
         if ( socket != sender.socket )      
            socket.write(sender.nickname + ' : ' + message);
      });
   });

   socket.on('end', function () {
      console.log('connection end')
      // 소켓 목록에서 삭제
      var client = findClient(socket);
      var index = clientList.indexOf(client);
      clientList.splice(index, 1);
      
      console.log(client.nickname + "님이 채팅방을 떠났습니다.");
   });
});

server.listen(3000);