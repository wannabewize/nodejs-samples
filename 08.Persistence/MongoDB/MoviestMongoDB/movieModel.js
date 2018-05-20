var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/moviest';
var ObjectID = require('mongodb').ObjectID;

var db;

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   db = database;
});

class MovieModel {
   // 전체 도큐먼트 목록 얻기
   getMovieList(callback) {
      // 콜백 기반
      // return db.collection('movies').find({}).toArray((err, docs) => {
      //    if ( err ) {
      //       return callback(err);
      //    }

      //    callback(null, docs);
      // });      

      // 프라미스 기반
      // return new Promise( (resolve, reject) => {
      //    db.collection('movies').find({}).toArray()
      //    .then( result => {
      //       resolve(result);
      //    })
      //    .catch( error => {
      //       reject(error);
      //    });
      // });       

      // 프라미스 기반2
      return db.collection('movies').find({}).toArray()
   }

   getMovieDetail(id) {
      return db.collection('movies').findOne({_id:new ObjectID(id)})
   }

   addMovie(title, director, year) {
       // TODO
   }
}

module.exports = new MovieModel()