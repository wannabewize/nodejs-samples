
class User {

}

const userList = [
   {id:'iu', pw:'1234', name:'아이유'},
   {id:'inna', pw:'1234', name:'유인나'},
   {id:'sh', pw:'1234', name:'설현'}
];

User.findUser = function(userId) {
   for(var user of userList) {
      if ( user.id == userId ) {
         return user;
      }
   }
   return null;
}

module.exports = User;
