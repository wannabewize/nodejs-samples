var greeting1 = require('./myModule1');
greeting1.goodMorning();

var greeting2 = require('./myModule2');
var app = new greeting2();

app.howAreYou();
app.sayGoodbye('Steve');