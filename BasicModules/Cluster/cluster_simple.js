
var cluster = require('cluster');

if (cluster.isMaster) {

   var numCPUs = require('os').cpus().length;
   console.log('Number of CPU : ', numCPUs);
   
   // Fork workers.
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }

   /*
   Event: 'disconnect'
   Event: 'exit'
   Event: 'fork'
   Event: 'listening'
   Event: 'message'
   Event: 'online'
   Event: 'setup'
   */

   cluster.on('disconnect', function(worker) {
      console.log('The worker #' + worker.id + ' has disconnected');
   });

   cluster.on('exit', function (worker, code, signal) {
      console.log('exit Event from : ', worker.id);
   });

   cluster.on('fork', function (worker) {
      console.log('The worker #' + worker.id + ' has forked');
   });
   
   // 워커의 listen 메소드
   cluster.on('listening', function(worker, address) {
      console.log('The worker #' + worker.id + ' listening : ', address);
   });
   
   cluster.on('message', function(worker, message) {
      console.log('The worker #' + worker.id + ' message : ', message);
   });

   cluster.on('online', function (worker) {
      console.log('The worker #' + worker.id + ' is online');
   });

} else {
   var worker = cluster.worker;
   console.log('Worker : ', worker.id);
}

