function sayHello() {
    console.log('Hello');
}

sayHello();

const greeting = sayHello;
greeting();


// 함수를 반환하는 함수
function returnFunction() {
    function innerFunction() {
        console.log('Hello. inside1!');
    } 

    return innerFunction;
}

const fn = returnFunction();
fn();

function returnFunction() {
    return function() {
        console.log('Hello. inside2!');
    }
}

returnFunction()();

// 함수를 파라미터로 하는 함수
function doIt(what) {
    what();
}

function running() {
    console.log('Run!!');
}
doIt(running);

doIt( function() {
    console.log('Jump!');
});

