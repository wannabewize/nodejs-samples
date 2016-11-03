var crypto = require('crypto');

function User() {}

// 데이터베이스!
User.prototype.users = [];

// 사용자 가입
User.prototype.signup = function(id, pw, name) {
   var sha1 = crypto.createHash('sha1');
  
   // Salting 
   var salt = crypto.randomBytes(5).toString('hex');
   sha1.update(pw + salt);
   var hashedPW = sha1.digest('hex');
   // console.log('origin pw : ', pw, 'salt : ', salt, ' hashed : ', hashedPW);      

   var user = {
      id : id,
      name : name,
      pw : hashedPW,
      salt : salt      
   }
   
   this.users.push(user);
}

// 로그인
User.prototype.login = function(id, pw, cb) {
   for(var i = 0 ; i < this.users.length ; i++) {
      var user = this.users[i];
      if ( user.id == id ) {
         // 로그인 암호에 사용자 salt 적용
         var sha1 = crypto.createHash('sha1');         
         var salt = user.salt;
         sha1.update(pw + salt);
         var digest = sha1.digest('hex');
         //console.log('user pw : ', user.pw, ' digest : ', digest);
   
         // Salting한 암호와 사용자 암호 비교      
         if ( user.pw == digest ) {
            // 로그인 성공 - 사용자 정보 반환
            cb(null, {id:user.id, name:user.name});
            this.break;
            return;
         }
         else {
            cb(null, false, {msg : '사용자 암호가 다르다!'});
            this.break;
            return;
         }
         
      }
   }
   cb(null, false, {msg:'등록된 사용자가 아닙니다.'});
}

// 내용 출력
User.prototype.showUsers = function() {
   this.users.forEach(function(user) {
      console.log('id : ' + user.id + ' pw : ' + user.pw);
   });
}

module.exports = new User();
