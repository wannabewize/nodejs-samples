//
// 인스턴스 메소드, 정적 메솓
//

const mongoose = require('mongoose');

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url, {useNewUrlParser: true });

const PersonSchema = new mongoose.Schema({
    name: String,
    value: Number,
    modified: { type: Date, default: Date.now }
});

// Instance Method
PersonSchema.methods.increse = function (num) {
    console.log('increase method in Schema', this);
    this.value += num;
    this.modified = new Date();
    return this.save();
}

const Person = mongoose.model('Person', PersonSchema);

//
// Static Method
PersonSchema.statics.changeName = function (from, to) {
    Person.findOneAndModify({ name: from }, [], { $set: { name: to } }).then(doc => {
        console.log('find and modify success', doc);
    }, error => {
        console.log('find and modify error', error);
    });
}

//
// Instance Method
async function increaseValue(name, amount) {
    try {
        const doc = await Person.findOne({ name: name });
        if ( !doc ) {
            console.log('Can not find doc');
            return;
        }

        // Instance method 호출
        const result = await doc.increse(amount);
        console.log('Instance method result :', result);
    }
    catch ( error ) {
        console.log('Error :', error);
    }
}

async function saveValue(name, value) {
    const obj = new Person();
    obj.name = name;
    obj.value = value;

    try {
        const result = await obj.save();
        console.log('Save Success :', result);
    }
    catch ( error ) {
        console.log('Save Error :', error);
    }
}

// saveValue('아이유', 1);
// saveValue('설현', 2);
increaseValue('아이유', 11);
// Person.changeName('아이유', 'IU')