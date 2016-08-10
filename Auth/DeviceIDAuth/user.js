class User {

}

const userList = [
   {id:'iu', name:'아이유', deviceID:'device1'},
   {id:'ty', name:'태연', deviceID:'device2'},
   {id:'sulhyun', name:'설현', deviceID:'device3'}
];

User.findUserByDeviceID = function(deviceID, callback) {
   for(var user of userList) {
      if ( user.deviceID == deviceID ) {
         callback(null, user);
         return;
      }
   }
   callback(null, null);
};

User.registUser = function(id, name, deviceID, callback) {
   // TODO : id 중복 체크
   var user = user;
   userList.push(user);
   callback(null, user);
}

module.exports = User;
