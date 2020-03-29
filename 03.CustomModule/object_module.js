let hour = 0;

function code() {
   hour++;
   console.log(hour + '시간째 코딩 중');
}

module.exports = {hour, code};

/*
module.exports = {
   hour : 0,
   code : function() {
      this.hour++;
      console.log(this.hour + '시간째 코딩 중');
   },
   study : () => {
      console.log('this :', this);
      this.hour++;
      console.log(this.hour + '시간째 공부 중');
   }
};
*/