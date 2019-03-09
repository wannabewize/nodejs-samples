var http = require('http');
var server = http.createServer(function(req, res) {
   if ( req.method.toLowerCase() == 'post' ) {
      var contentType = req.headers['content-type'];
      console.log('content type : ', contentType);
      if ( contentType == 'application/x-www-form-urlencoded' ) {
         res.end('urlencoded');
         return;     
      }
      // multipart/form-data; boundary=----WebKitFormBoundary96b2vmO61hbRdIJo      
      var elements = contentType.split(';');
      var firstElem = elements[0];   
      
      console.log('second : ', secondElem);
      var mainContentType = firstElem.split('/')[0];// mulltipart
      console.log('main content type : ', mainContentType);
      
      var secondElem = elements[1].trim();
      var boundary = secondElem.split('=')[1];
      console.log('boundary : ', boundary);
      
      if ( mainContentType == 'multipart' ) {
         
         // 멀티파트
         var buffer = '';
         req.on('data', function(chunk) {
            console.log('Data Event, ', chunk.length, ' buffer? : ', Buffer.isBuffer(chunk) );
            buffer += chunk.toString();
         });
         req.on('end', function() {
            console.log('End Event ', buffer.length);
            var parts = buffer.split('--' + boundary);
            
            for(var i = 0 ; i < parts.length ; i++) {
               console.log('== PART ', i);
               // console.log(parts[i]);
            }
            
            res.end('Multipart EncType message');
            return;

         });         
      }
      
      // 그외 인코딩
      res.end('Other Post encoding');
   }
   else {
      res.end('Hello World');
   }
}).listen(3000);