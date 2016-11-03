function sumValue(value, callback) {
   var result = 0;
   for ( var i = 0 ; i <= value ; i++) {
      result += i;
   }
   callback(result);
}


function showSum(result) {
   console.log('Sum 1...10 : ' + result);
}
sumValue(10, showSum);


sumValue(20, function(result) {
   console.log('Sum 1...20 : ' + result);
});

sumValue(30, result => {
   console.log('Sum 1...30 : ' + result);
});