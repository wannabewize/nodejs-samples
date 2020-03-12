function goodMorning() {
    console.log('good morning.');
}

goodMorning();

class Person {
    goodAfternoon() {
        console.log('good afternoon.');
    }
}

let obj = new Person();
obj.goodAfternoon();


function goodNight() {
    function say() {
        console.log('good night');        
    }

    say();
}

goodNight();
// Error
//say();