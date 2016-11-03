function User() {
};

User.prototype.userData = [
   {id:'user', name:'사용자', password:'1234'}
];

User.prototype.findOne = function(id) {
	for (var i = 0 ; i < this.userData.length ; i++) {
      var user = this.userData[i];
      if ( user.id == id ) {
         return user;
      }
   }
   return null;   
}

User.prototype.registerUser = function(id, name, password) {
   var newUser = {
      id:id,
      name:name,
      password:password
   };
   this.userData.push(newUser);      
}

module.exports = new User();