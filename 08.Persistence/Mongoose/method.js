const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);

const PersonSchema = new mongoose.Schema({
   name : String, 
   value : Number,
   modified : { type:Date, default:Date.now }
});

// Instance Method
PersonSchema.methods.increse = function(num) {
   console.log('increase method in Schema', this);
   this.value += num;
   this.modified = new Date();
   return this.save();
}

const Person = mongoose.model('Person', PersonSchema);

//
// Static Method
PersonSchema.statics.changeName = function(from, to) {
    Person.findOneAndModify({name:from}, [], {$set:{name:to}}).then( doc => {
        console.log('find and modify success', doc);
    }, error => {
        console.log('find and modify error', error);
    });
}

//
// Instance Method
function increaseValue(name, amount) {
   Person.findOne({name:name}).then( doc => {
      if ( ! doc ) {
         console.log('Can not find value for', name);
         return;
      }

      console.log('Found document for', name);

      // Schema에 작성한 인스턴스 메소드 사용
      doc.increse(amount).then(result => {
         console.log('Increase Value success');
      }, err => {
         console.error('error :', err);
      });
   }, err => {
      console.error('Find Error :', err);
   });
}

function saveValue(name, value) {
   const obj = new Person();
   obj.name = name;
   obj.value = value;

   obj.save().then( result => {
      console.log('value save success');
   }, err => {
      console.log('value save fail :', err);
   });
}

saveValue('아이유', 1);
// saveValue('설현', 2);
// increaseValue('아이유', 11);
// Person.changeName('아이유', 'IU')