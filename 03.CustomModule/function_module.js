/**
 * 함수 단위의 모듈
*/

// 함수 별도 정의 후 exports
function goodMorning() {
	console.log('Good Mornring!');
}

exports.goodMorning = goodMorning;

// module은 생략 가능, exports로 직접 함수 작성, Arrow Function
exports.goodNight = (who) => {
   console.log('Good Afternoon, ' + who);
}

// export하지 않은 함수는 사용 불가능
function goodAfternoon() {
   console.log('goodAfternoon');
}