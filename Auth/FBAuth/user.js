function User() {   
};

User.prototype.userData = {};

User.prototype.findOne = function(id) {
   console.log('findOne : ', id);
   return this.userData[id];
};

User.prototype.registerUser = function(id, name, email, picture, token) {
   this.userData[id] = {
      id : id,
      name : name,
      email : email,
      picture : picture,
      token : token
   }  
   console.log('새로운 사용자 등록'); 
};

User.prototype.findOrCreate = function(id, name, email) {
   if ( ! this.userData[id]) {
      this.registerUser(id, name, email);       
   }
   else {
      console.log('기존 사용자');
   }
   return this.fineOne(id);
};


module.exports = new User();