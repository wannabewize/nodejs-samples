/**
 * 다수의 Constructor를 exports 하는 모듈
 */
function BusDef() {
   this.take = function() {
      console.log('Take bus');
   }
}

function MetroDef() {
	this.ride = function() {
		console.log('Metro');
	}
}

module.exports.Bus = BusDef;
// module 생략 가능
exports.Metro = MetroDef;