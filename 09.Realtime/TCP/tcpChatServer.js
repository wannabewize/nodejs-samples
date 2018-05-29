const net = require('net');

var clientList = [];

var server = net.createServer( socket => {
   // Connection Event
   console.log('Remote Address : ', socket.remoteAddress);
   
   socket.write('Welcome to TCP Chat Service, ' + nickname + '\n');
   socket.write('대화명 변경 : \\rename [NAME]\n');
   socket.write('채팅방 종료 : \\exit\n');   

   // 임시 닉네임 생성

   var nickname = 'Guest' + Math.floor(Math.random()*100);
   clientList.push(socket);

   socket.on('data', (data) => {
         console.log('socket is nil?', !socket)
      var message = data.toString('UTF-8');

      if ( message.trim() == '\\exit' ) {
         socket.end();
         return;
      }
      else if ( message.indexOf('\\rename') != -1 ) {
         var newNickName = message.split(' ')[1];
         
         message = nickname + ' change nickname ' + newNickName;
         console.log(message);
                  
         nickname = newNickName;
         return;         
      }
      else {
         console.log(nickname + ' write ' + message);   
         message = nickname + ' : ' + message;
      }
                  
      // 채팅 메세지를 모든 클라이언트 소켓에 전달
      for(var client of clientList) {
         // 글 작성자에게는 보내지 않는다.
         if ( socket != client )      
         client.write(message);
      };
   });

   socket.on('end', () => {
      // 소켓 목록에서 삭제
      var index = clientList.indexOf(socket);
      clientList.splice(index, 1);
      
      console.log(nickname + "님이 채팅방을 떠났습니다.");
   });
});

server.listen(3000);