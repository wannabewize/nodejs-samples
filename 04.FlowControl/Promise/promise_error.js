// Unhandle reject Error
// Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

function doIt() {
    return new Promise( (resolve, reject) => {
        // resolve();
        reject();
    });
}

doIt().then( result => {
    console.log('Success');
});