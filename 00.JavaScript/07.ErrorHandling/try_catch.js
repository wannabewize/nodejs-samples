function throwStringError(arg) {
   if ( arg < 0 )
      throw '0보다 작은 값 입력 에러';
}

function inputPositive(arg) {
   if ( arg < 0 )
      throw new Error('0보다 작은 값 입력');
}

try {
   throwStringError(-1);
}
catch ( error ) {
   console.error(error);
}

try {
   inputPositive(-1);
}
catch ( error ) {
   const message = error.message;
   console.error(message);
}

// throwError(-1);
console.log('== END ==');