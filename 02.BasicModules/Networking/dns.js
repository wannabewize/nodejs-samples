var dns = require('dns');

// Lookup
dns.lookup('www.google.com', function(err, addresses, family) {
   if ( err ) {
      console.error('lookup error : ', err);
      return;
   }

   console.log('lookup :', addresses, ' family : ', family);
});

// resove - Connect DNS Server
dns.resolve('www.google.com', function (err, addresses) {
   if (err) {
      console.error('resolve4 Error : ', err);
      return;
   }
   console.log('resolve4 : ', addresses);
});

dns.reverse('74.125.203.147', function(err, hostnames) {
   if ( err ) {
      console.error('reverse error : ', err);
      return;
   }
   console.log('reverse : ', hostnames);
});