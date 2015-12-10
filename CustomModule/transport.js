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