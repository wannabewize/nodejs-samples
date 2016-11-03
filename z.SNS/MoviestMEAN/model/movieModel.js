var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/Moviest');

var db = mongoose.connection;
db.on('error', function(err) {
    console.log('Error : ', err);
});
db.once('open', function() {
    console.log('DB Opened');
    saveInitialData();
});

var MovieSchema = mongoose.Schema({
    title : String,
    director : String,
    year : Number,
    synopsis : String,
    userId : String
});

function saveInitialData() {
    // 데이터의 갯수가 0이면 초기 데이터 입력
    Movie.count({}, function(err, docs) {
        if ( err ) {
            console.log('Error : ', err);
            return;
        }

        if ( 0 === docs ) {
            console.log('No data found. Insert initial Data');

            var fs = require('fs');
            var data = fs.readFileSync('./model/movieData.json');
            var movieList = JSON.parse(data);
            Movie.create(movieList).then(function(result){
                console.log('Success : ', result);
            }, function(err) {
                console.log('Error : ', err);
            });
        }
        console.log('Movie count : ', docs);
    });
};

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;



