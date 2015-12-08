
var cluster = require('cluster');

if (cluster.isMaster) {

   var numCPUs = require('os').cpus().length;
   console.log('Number of CPU : ', numCPUs);
   
   // Fork workers.
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }

   cluster.on('disconnect', function (worker) {
      console.log('Master) Disconnect Event : ', worker.id);
   });

   cluster.on('exit', function (worker, code, signal) {
      console.log('Worker #' + worker.id + ' exit');
   });

   cluster.on('fork', function (worker) {
      console.log('Master) Fork event : ', worker.id);
   });
   
   // 워커의 listen 메소드
   cluster.on('listening', function (worker, address) {
      console.log('Master) Listening event : ', worker.id, ' address : ', address);
   });

   cluster.on('online', function (worker) {
      console.log('Worker #' + worker.id + ' is Online');
   });

} else {
   var worker = cluster.worker;

   worker.on('disconnect', function() {
      console.log('Worker) Disconnect event : ', worker.id);
   });
   
   worker.on('error', function(err) {
      console.log('Worker) Error event : ', err);
   });
   
   worker.on('exit', function(code, signal) {
      console.log('Worker) Exit event : ', worker.id, ' code : ', code, ' signal : ', signal);
   });
   
   worker.on('listening', function(address) {
      console.log('Worker) Listening event : ', worker.id, ' address : ', address);
   });
      
   setTimeout(function() {
      worker.kill();
   }, 3000);
}