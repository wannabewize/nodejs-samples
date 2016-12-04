const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);


const ValueSchema = mongoose.Schema({
   value : Number,
   modified : { type:Date, default:Date.now }
});

// Instance Method
ValueSchema.methods.increse = function(num) {
   console.log('increase method in Schema', this);
   this.value += num;
   this.modified = new Date();
   return this.save();
}

const Value = mongoose.model('Value', ValueSchema);

function increaseValue(skip, increse) {
   Value.findOne().skip(skip).then( doc => {
      doc.increse(17).then(result => {
         console.log('increase success :', result);
      }, err => {
         console.error('error :', err);
      });
   }, err => {
      console.error('Find Error :', err);
   });
}

function saveValue1(v) {
   const obj = new Value();
   obj.value = v;

   obj.save().then( result => {
      console.log('value save success');
   }, err => {
      console.log('value save fail :', err);
   });
}

// saveValue1(20);
increaseValue(0, 11);