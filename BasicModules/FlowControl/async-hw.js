var async = require('async');
var fs = require('fs');

fs.series([
   function(callback) {
      var file = './async-hw.js';
      fs.access(file, function(err) {
         
      })
      callback(null, null);
   }
], function(err, results) {
   
});