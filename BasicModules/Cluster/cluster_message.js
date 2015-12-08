var cluster = require('cluster');

if (cluster.isMaster) {

   var numCPUs = require('os').cpus().length;
   
   // Fork workers.
   for (var i = 0; i < numCPUs; i++) {
      var worker = cluster.fork();
      worker.on('message', function(message) {
         console.log('Master received : ', message, 'from : ', worker.id);
      });
   }

   cluster.on('online', function (worker) {
      console.log('Master send message to worker #' + worker.id);
      worker.send({message:'Hello Worker'});
   });

} else {
   var worker = cluster.worker;
   
   worker.on('message', function(message) {
      console.log('Worker #' + worker.id, 'received ', message);
      process.send({message:'Fine thank you!'});
   });   
   
   setTimeout(function() {
      worker.kill();
   }, 3000);
}