const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);

const Post = require('./post');
const Reply = require('./reply').Reply;

db.on('error', function(err) {
   console.log('Error : ', err);
});
db.on('open', function() {
   console.log('db open');
   // IU가 글쓰기
   // writePost('IU', '이렇게 좋은 날');
   // IU가 쓴 글에 댓글 달기
   // writeReply('IU', '좋아요~');
   writeReply('IU', '저도 좋아요~');
});


function writePost(name, text) {
   const post = new Post({name:name, text:text});
   post.save().then( result => {
      console.log('success');
   }, reason => {
      console.log('error :', reason);
   }); 
}

function writeReply(name, text) {
   Post.findOne({name:name}, (err, doc) => {
      console.log('Find! ', doc);

      const reply = new Reply({text:text});
      doc.reply.push(reply);

      doc.save().then( result => {
         console.log('save reply success');
      }, reason => {
         console.log('save reply fail :', reason);
      });
   });
}

