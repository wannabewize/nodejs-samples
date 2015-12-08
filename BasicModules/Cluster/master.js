var cluster = require('cluster');

cluster.setupMaster({
   exec:'worker.js'
});

cluster.fork();