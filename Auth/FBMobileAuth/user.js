function User() {   
};

User.prototype.userData = [];

User.prototype.findOne = function(id) {   
   console.log('findOne : ', id, this.userData);
   for(var i = 0 ; i < this.userData.length ; i++) {
      var user = this.userData[i];
      if ( user.id == id ) {
         console.log('found user', user);
         return user;
      }
   }
   return null;
};

// 사용자 등록
User.prototype.registerUser = function(user) {
   var newUser = {
      id : user.id,
      name : user.displayName,
      email : user.emails[0].value,
      picture : user.photos[0].value
   }  
   this.userData.push(newUser);
   console.log('새로운 사용자 등록'); 
   console.log(this.userData);
   return newUser;
};

// 사용자 찾기/등록
User.prototype.findOrCreate = function(profile, token, callback) {
   var userId = profile.id;
   console.log('findOrCreate : ', userId);
   
   var user = this.findOne(userId);   
   if ( ! user ) {
      user = this.registerUser(profile);       
   }
   callback(null, user);
};


module.exports = new User();