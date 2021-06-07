const crypto = require('crypto');

// 데이터베이스!
let users = [];

// 사용자 가입
exports.signup = (id, pw, name) => {
   const sha1 = crypto.createHash('sha1');
  
   // Salting 
   const salt = crypto.randomBytes(5).toString('hex');
   sha1.update(pw + salt);
   const hashedPW = sha1.digest('hex');
   console.log('origin pw : ', pw, 'salt : ', salt, ' hashed : ', hashedPW);      

   const user = {
      id : id,
      name : name,
      pw : hashedPW,
      salt : salt      
   }
   
   users.push(user);
}

// 로그인
exports.login = (id, pw) => {
   // id가 같은 유저 찾기
   const filtered = users.filter( item => {
      return id == item.id
   });

   // 유저 없는 경우
   if ( !filtered || filtered.length == 0 ) {
      console.log('user 없음');
      return null;
   }


   const user = filtered[0];
   // 로그인시 입력한 pw에 동일한 salt 적용
   var sha1 = crypto.createHash('sha1');         
   var salt = user.salt;
   sha1.update(pw + salt);
   var digest = sha1.digest('hex');
   //console.log('user pw : ', user.pw, ' digest : ', digest);

   // Salting한 암호와 사용자 암호 비교      
   if ( user.pw == digest ) {
      // 로그인 성공 - 사용자 정보 반환
      return { id: user.id, name: user.name };
   }
   else {
      return null;
   }
}

// 내용 출력
exports.showUsers = () => {
   users.forEach( (user) => {
      console.log('id : ' + user.id + ' pw : ' + user.pw);
   });
}