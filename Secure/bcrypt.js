var bcrypt = require('bcrypt');

var users = [];

function signup(id, pw, name) {
   bcrypt.genSalt(10, function(err, salt) {
      // console.log('salt : ', salt);
      bcrypt.hash('password', salt, function(err, hash) {
         // console.log('hashed password : ', hash)
         
         // bcryt는 salt와 hash 값이 함께 전달된다.
         // $2a$10$gmwHDPvMXqISSunZma8yB.dAB477UAjT9X3nSPLf0wgMF7XEVFZIy         
         var user = {
            id : id,
            pw : hash,
            name : name
         };
         users.push(user);
      });
   });   
}

function login(id, pw) {
   for(var i = 0 ; i < users.length ; i++) {
      var user = users[i];
      if ( user.id == id ) {
         // 암호 비교. salt는 hash값과 함께 저장돼있다.    
         console.log(user);   
         var same = bcrypt.compareSync(pw, user.pw);  
         if ( same ) {
            console.log('Login Success');
         }
         else {
            console.log('Login fail');
         }
         return;
      }
   }
   console.log('No User!');
}


signup('iu', 'MyLifeForIU', 'IU');
// 비동기
setTimeout(function() {
   login('iu', 'wrong password');
   login('iu', 'MyLifeForIU');   
}, 100);


