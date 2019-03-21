const task1 = (success1, success2) => {
    return new Promise( (resolve, reject) => {
        console.log('Task1 Start');
        setTimeout( () => {
            console.log('Task1 Done');
            if ( success1 ) {
                resolve(success2);
            }
            else {
                reject('Task1 Error');
            }
        }, 1000);
    });
}

const task2 = (success) => {
    return new Promise( (resolve, reject) => {
        console.log('Task2 Start');
        setTimeout( () => {
            console.log('Task2 Done');
            if ( success ) {
                resolve('Task2 Success');
            }
            else {
                reject('Task2 Error');
            }
        }, 1000);
    });
}

task1(true, true)
.then( (result) => {
    return task2(result);
})
.then( (result) => {
    console.log('task(true, true) Done');
})
.catch( err => {
    console.log('task(true, true). failure :', err);
});
