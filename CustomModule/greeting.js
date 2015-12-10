/**
 * 함수 단위의 모듈
*/
module.exports.goodMorning = function() {
	console.log('Good Mornring!');
}

// module은 생략 가능
exports.goodNight = function(who) {
   console.log('Good Afternoon, ' + who);
}

// export하지 않은 함수는 사용 불가능
function goodAfternoon() {
   console.log('goodAfternoon');
}