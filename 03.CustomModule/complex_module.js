// 값
exports.thisYear = '2020';

// 함수
exports.sayGoodMorning = () => {
    console.log('good morning');
};

// 객체
exports.student = {
    hour : 0,
    study : function() {
       this.hour++;
       console.log(this.hour + '시간째 공부 중');
    }
 };

 // 클래스 정의
 class Bird {
    sing() {
       console.log('Bird sing');
    }
 }
 
 exports.Bird = Bird;
 