const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', function(err) {
   console.log('Error : ', err);
});
db.on('open', function() {
   console.log('Open Event');
});

const ErrorScema = mongoose.Schema({
  name : String,
  value1: Number,
  value2: {type: Number, min: 0, max: 100, default: 0}
});

// movies 콜렉션으로 생성
const ErrorModel = mongoose.model('ErrorSchema', ErrorScema);

new ErrorModel({name:'NoValue'}).save().then( ret => {
    console.log('NoValue success :', ret);
}).catch( err => {
    console.log('NoValue fail :', err);
});

new ErrorModel({name:'Wrong PropertyName', value:10, value2:100}).save().then( ret => {
    console.log('Wrong PropertyName Success :', ret);
}).catch( err => {
    console.log('Wrong PropertyName Fail :', err);
});

new ErrorModel({name:'Wrong Type', value1:'abc', value2:1}).save().then( ret => {
    console.log('Wrong Type Success :', ret);
}).catch( err => {
    console.log('Wrong Type Fail :', err);
});

new ErrorModel({name:'Exceed ValueRange', value1:200, value2:200}).save().then( ret => {
    console.log('Exceed ValueRange Success :', ret);
}).catch( err => {
    console.log('Exceed ValueRange Fail :', err);
});