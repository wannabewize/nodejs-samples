const url = require('url');

const urlObj = {
   protocol : 'https',
   host : 'www.imdb.com',
   pathname : '/find',
   search : 'q=avengers&s=name'
}

const urlStr = url.format(urlObj);
console.log(urlStr);