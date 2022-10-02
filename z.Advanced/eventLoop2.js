const fs = require('node:fs');

fs.readFile('main.js', () => {
    setTimeout(() => {
        console.log('set timeout');
    }, 0)
    
    setImmediate(() => {
        console.log("set immediate")
    });
});