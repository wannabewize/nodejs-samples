var url = require('url');

var urlObj = {
   protocol : 'http',
   host : 'idols.com',
   pathname : 'schedule/radio',
   search : 'time=9pm&day=monday',
   auth : 'fan'
}

var urlStr = url.format(urlObj);

console.log(urlStr);