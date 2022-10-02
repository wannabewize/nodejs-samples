const { nextTick } = require("process");

function doIt() {
    console.log('doIt');
}
function doIt2() {
    console.log('doIt2');
}

setImmediate(doIt2);
nextTick(doIt);