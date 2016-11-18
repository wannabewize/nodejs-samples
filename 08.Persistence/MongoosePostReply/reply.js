const mongoose = require('mongoose');

const ReplyScheme = mongoose.Schema({
  text : String
});

// cafe scheme
module.exports.ReplyScheme = ReplyScheme;
// cafes collection
module.exports.Reply = mongoose.model('reply', ReplyScheme); 