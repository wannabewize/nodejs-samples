module.exports = {
   hour : 0,
   study : function() {
      this.hour++;
      console.log(this.hour + '시간째 공부 중');
   },
   // 객체에 정의된 Arrow Function의 경우 this로 프로퍼티 접근이 불가능
   study2 : () => {
      this.hour++;
      console.log(this.hour + '시간째 공부 중');
   }
};