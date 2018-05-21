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

const MyScema = mongoose.Schema({
  name : String
});

// movies 콜렉션으로 생성
const MyModel = mongoose.model('MySchema', MyScema);

const model1 = new MyModel({name: 'model1'});
model1.save( (err, product, numAffected) => {
    if (err) {
        console.error('movel1 저장 에러 :', err);
        return;
    }
    console.log('movel1 저장 성공 :', product, numAffected);
});

const model2 = new MyModel({name: 'model2'});
model2.save().then( product => {
    console.log('model2 저장 성공 : ', product);
}).catch( err => {
    console.log('model2 저장 실패 : ', err);
});