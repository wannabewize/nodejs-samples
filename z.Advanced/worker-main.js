const { Worker, isMainThread, parentPort } = require('node:worker_threads');


console.log('main thread');
const worker = new Worker('./worker.js');
worker.on('message', msg => {
    console.log('message from worker :', msg);
})
worker.postMessage('Hello');