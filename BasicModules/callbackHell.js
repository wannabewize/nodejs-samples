function task1(callback) {
   console.log('First Task Started');
   setTimeout(function() {
      console.log('First Task Done');
      callback();
   }, 3000);         
}

function task2() {
   console.log('Second Task Started');
   setTimeout(function() {
      console.log('Second Task Done');
   }, 1000);         
}


task1(function() {
   task2();   
});

