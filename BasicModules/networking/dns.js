var dns = require('dns');

// Lookup
dns.lookup('www.google.com', function(err, addresses, family) {
   if ( err ) {
      console.error('lookup error : ', err);
      return;
   }

   console.log('addresses :', addresses, ' family : ', family);
});


dns.resolve4('www.google.com', function (err, addresses) {
   if (err) {
      console.error('resolve4 Error : ', err);
      return;
   }
   
   console.log(addresses);
});


dns.reverse('74.125.203.147', function(err, hostnames) {
   if ( err ) {
      console.error('reverse error : ', err);
      return;
   }
   console.log('reverse : ', hostnames);
});

dns.lookupService('74.125.203.147', 80,function(err, hostname, service) {
   console.log(err, hostname, service);
});