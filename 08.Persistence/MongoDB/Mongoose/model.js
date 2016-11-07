var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mongoose';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function(err) {
   console.log('Error : ', err);
});
db.on('open', function() {
   console.log('Open Event');
});

var MovieScheme = mongoose.Schema({
  title : String,
  director : String,
  year : Number,
  synopsis : String
});

// movies 콜렉션으로 생성
module.exports.Movie = mongoose.model('Movie', MovieScheme);

// var ReviewScheme = mongoose.Schema({
//    movie : MovieScheme,
//    review : String
// });

// module.exports.Review = mongoose.model('Review', ReviewScheme);

