const { parentPort } = require('worker_threads');

console.log('worker thread');
parentPort.on('message', value => {
    console.log('message from parent', value);
    parentPort.postMessage('Hi');
    parentPort.close();
});
