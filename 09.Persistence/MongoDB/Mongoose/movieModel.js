var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/moviest';
mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', (err) => {
   console.log('Error : ', err);
});
db.on('open', () => {
   console.log('Open Event');
});

var MovieScheme = mongoose.Schema({
  title : String,
  director : String,
  year : Number,
  synopsis : String
});

// movies 콜렉션으로 생성
module.exports = mongoose.model('Movie', MovieScheme);


