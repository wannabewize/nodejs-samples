class BelowZeroError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

function inputPositive(arg) {
    if ( arg < 0 )
        throw new BelowZeroError('0보다 작은 값 입력', 10001);
}


try {
    inputPositive(-1);
}
catch ( error ) {
    if ( error instanceof BelowZeroError ) {
        const message = error.message;
        const code = error.code;
        console.error('BelowZeroError!', message, code);
    }
    else {
        console.error('그외 에러 발생')
    }
}

// throwError(-1);
console.log('== END ==');