const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mongoose';
mongoose.connect(url, {useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (err) => {
   console.log('Error : ', err);
});
db.on('open', () => {
   console.log('Open Event');
});

const FriendSchema = mongoose.Schema({
  name : String
});

// movies 콜렉션으로 생성
const MyModel = mongoose.model('Friend', FriendSchema);

const model1 = new MyModel({name: 'IU'});
model1.save( (err, product, numAffected) => {
    if (err) {
        console.error('movel1 저장 에러 :', err);
        return;
    }
    console.log('movel1 저장 성공 :', product, numAffected);
});

const model2 = new MyModel({name: 'Sana'});
model2.save().then( product => {
    console.log('model2 저장 성공 : ', product);
}).catch( err => {
    console.log('model2 저장 실패 : ', err);
});