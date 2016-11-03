const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sns');

const FeedSchema = new mongoose.Schema({
   message : String,
   author : String,
   image : String,
   date : { type : Date, default:Date.now()}
});

const Feed = mongoose.model('Feed', FeedSchema);

Feed.fetchRecentFeed = function(callback) {
   Feed.find().exec((err, result) => {
      if ( err ) {
         return callback(err, null);
      }
      console.log('result : ', result);
      callback(null, result);
   });
};

Feed.writeFeed = function(feed, callback) {
   Feed.create(feed, (err, result) => {
      if ( err ) {
         return callback(err, null);
      }
      console.log('Feed write success : ', result);
      callback(null, result);
   });
};

module.exports = Feed;

