const url = require('url');

const urlObj = {
   protocol : 'http',
   host : 'idols.com',
   pathname : 'schedule/radio',
   search : 'time=9pm&day=monday',
   auth : 'fan'
}

const urlStr = url.format(urlObj);
console.log(urlStr);