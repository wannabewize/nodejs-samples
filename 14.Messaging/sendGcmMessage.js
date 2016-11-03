var gcm = require('node-gcm');

// Server API Key
var sender = new gcm.Sender('SERVER-API-KEY');                            
//
var message = new gcm.Message();
message.addData('title', '푸쉬 노티 메세지 제목');
message.addData('message', '푸쉬 노티 메세지 내용');

// nexus5, nexus4
var regIds = ['dJxqfacbfu4:APA91bF8YmXEb9MxwQXdQnVMTeiXUUFNbedlM8YBQbYGT-7fHUjeoFvQ6FnlF1EQB4Xd7UZyUsVVEYTkzpxcJJ4_rsuQ26E7-TqYd3aE5v7JZjBi3ZtExZbfVtEt4_9JU_cQrJLXooAG', 'dJxqfacbfu4:APA91bF8YmXEb9MxwQXdQnVMTeiXUUFNbedlM8YBQbYGT-7fHUjeoFvQ6FnlF1EQB4Xd7UZyUsVVEYTkzpxcJJ4_rsuQ26E7-TqYd3aE5v7JZjBi3ZtExZbfVtEt4_9JU_cQrJLXooAG'];

sender.send(message, regIds, function(err, result) {
  if (err) {
    console.error('Error : ' + err);
  }
  else {
    console.log('Success : ', result);
  }
});