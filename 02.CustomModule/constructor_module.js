/**
 * 다수의 Constructor를 exports 하는 모듈
 */
function Bus() {
   this.take = function() {
      console.log('Take bus');
   }
}

exports.Bus = Bus;

// module 생략 가능
exports.Metro = function() {
   this.ride = function() {
      console.log('Metro');
   }
};