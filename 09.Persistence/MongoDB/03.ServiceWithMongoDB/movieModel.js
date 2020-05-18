var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/example';
var ObjectID = require('mongodb').ObjectID;

var db;

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   db = client.db();
});

class MovieModel {}

// 전체 도큐먼트 목록 얻기
MovieModel.getMovieList = () => {   
   return db.collection('movies').find({}).toArray()   
}

MovieModel.getMovieDetail = (id) => {
   return db.collection('movies').findOne({_id:new ObjectID(id)})
}

MovieModel.addMovie = (title, director, year) => {
}

module.exports = MovieModel;