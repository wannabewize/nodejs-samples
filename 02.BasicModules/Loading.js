const readline = require('readline');
console.log(readline);



const {clearLine} = require('readline');
console.log(clearLine);
clearLine(process.stdout, 1, () => {
    console.log('clear line success');
});

const clearScreenDown = require('readline').clearScreenDown;
console.log(clearScreenDown);

// console.log('== EventEmitter ==');
// const {EventEmitter} = require('events');
// console.log(EventEmitter);