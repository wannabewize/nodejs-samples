let count = 0;
console.time('doit');
function doIt() {
    count++;
    if ( count < 1000 ) {
        setImmediate(doIt);
        // setTimeout(doIt, 0);
    }
    else {
        console.timeEnd('doit')
    }
}

doIt();