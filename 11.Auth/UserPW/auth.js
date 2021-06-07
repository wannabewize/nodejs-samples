const {signup, login, showUsers} = require('./user');

// user1 가입
signup('user1', 'password1', '유저1');
// user2 가입
signup('user2', 'password2', '유저2');
showUsers();



// iu 로그인 - 잘못된 암호
const ret1 = login('user1', 'fakepw');
if ( ret1 ) {
   console.log('user1 login success', ret1);
}
else {
   console.log('user1 login fail');
}

// suji 로그인 - 로그인 성공
const ret2 = login('user2', 'password2');
if ( ret2 ) {
   console.log('user2 login success', ret2);
}
