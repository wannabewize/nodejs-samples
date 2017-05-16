const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);

const ValueSchema = new mongoose.Schema({});

ValueSchema.statics.staticMethod = function() {
    return 'static method works';
}

ValueSchema.methods.instanceMethod = function() {
    return 'instance method works';
}

const Value = mongoose.model('value', ValueSchema);

console.log(Value.staticMethod());

const obj = new Value();
console.log(obj.instanceMethod());

