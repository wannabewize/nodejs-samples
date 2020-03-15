class BelowZeroError extends Error {}

function inputPositive(arg) {
    if ( arg < 0 )
        throw new BelowZeroError('0보다 작은 값 입력');
}


try {
    inputPositive(-1);
}
catch ( error ) {
    if ( error instanceof BelowZeroError ) {
        console.error('BelowZeroError!', error.message);
    }
    else {
        console.error('그외 에러 발생')
    }
}

// throwError(-1);
console.log('== END ==');