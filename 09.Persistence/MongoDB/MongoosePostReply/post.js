const mongoose = require('mongoose');
const ReplyScheme = require('./reply').ReplyScheme;

const PostScheme = mongoose.Schema({
  name : String,
  text : String,
  reply : [ReplyScheme]
});

// movies 콜렉션으로 생성
module.exports = mongoose.model('post', PostScheme);