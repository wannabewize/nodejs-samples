function task(success) {
    return new Promise( (resolve, reject) => {
        success ? resolve('Task1 Done') : reject('Task1 Failure');
    });
}

async function doIt() {
    let result = await task(true);
}

doIt();
