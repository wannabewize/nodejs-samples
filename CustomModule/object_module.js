var student = {
   hour : 0,
   study : function() {
      this.hour++;
      console.log(this.hour + '시간째 공부 중');
   }
};

module.exports = student;