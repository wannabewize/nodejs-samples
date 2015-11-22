var user = require('./user');


user.signup('iu', 'myLifeForIU', 'IU');
user.signup('suji', 'beautySuji', '수지');

//user.showUsers();

function loginCB(err, user, msg) {
   if ( user ) {
      console.log('로그인 성공 ', user);
   }
   else {
      console.log('로그인 싪패 ', msg);
   }
}

// iu 로그인 - 잘못된 암호
user.login('iu', 'fakepw', loginCB);

// suji 로그인 - 로그인 성공
user.login('suji', 'beautySuji', loginCB);