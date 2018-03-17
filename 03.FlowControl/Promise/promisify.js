const util = require('util');

function task(arg, callback) {
   setTimeout( (arg) => {
      if ( arg ) {
         callback(null, 'Task Result');
      }
      else {
         callback('Error', null);
      }
   }, 1000);
}

const promisifiedTask = util.promisify(task);

// TODO
