/**
 * 객체 단위의 모듈
 */
var student = {
   hour : 0,
   study : function() {
      this.hour++;
      console.log(this.hour + '시간째 공부 중');
   }
};

exports.student = student;

exports.singer = {
   hour : 0,
   sing : function() {
      this.hour++;
      console.log(this.hour + '시간째 노래 중');
   }   
};