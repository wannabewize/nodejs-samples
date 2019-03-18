const url = require('url');

const urlStr = 'https://www.imdb.com/find?q=avengers&s=title';

const parsed = url.parse(urlStr);

console.log(parsed);

console.log('protocol : ', parsed.protocol);
console.log('host : ', parsed.host);
console.log('pathname : ', parsed.pathname);
console.log('query : ', parsed.query);

// parseQueryString - defulat = false
const parsed2 = url.parse(urlStr, true);

console.log('query2 :', parsed2.query);
const keyword = parsed2.query.q;
const type = parsed2.query.s
console.log('q : ', keyword);
console.log('s : ', type);
console.log('name : ', parsed2.query.name); // 없는 쿼리