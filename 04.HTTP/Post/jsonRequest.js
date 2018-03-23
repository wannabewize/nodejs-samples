const http = require('http');

http.createServer( (req, res) => {
   if ( req.method == 'POST') {
      const contentType = req.headers['content-type'];
      console.log('content type : ', contentType);

      // contentType : application/json, text/json도 사용한다고.
      if ( contentType.search('json') > 0 ) {
         let body = '';
         req.on('data', function(chunk) {
            body += chunk;
         });
         req.on('end', function() {
            const parsed = JSON.parse(body);
            console.log(parsed);

            const intVal = parsed['int'];
            console.log('int : ', intVal, ' is Number? : ', typeof intVal);

            const floatVal = parsed['float'];
            console.log('float : ', floatVal, ' is Number? : ', typeof floatVal);

            const boolVal = parsed['bool'];
            console.log('bool : ', boolVal);

            const nullVal = parsed['null'];
            console.log('null : ', nullVal, ' is null? : ', (nullVal == null));

            const dateStr = parsed['date'];
            const date = new Date(dateStr);
            console.log('date : ', date);

            const arrVal = parsed["array"];
            console.log('array : ', arrVal);

            const objVal = parsed["object"];
            console.log('object : ', objVal);

            res.end('OK');
         });
      }
      else {
         res.end('Not JSON Message');
      }
   }
   else {
      res.end('Not Post Message');
   }
}).listen(3000);