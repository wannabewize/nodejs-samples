var url = require('url');

var urlStr = 'http://idols.com/q?group=EXID&name=하니&since=';

var parsed = url.parse(urlStr, true);

console.log(parsed);

console.log('protocol : ', parsed['protocol']);
console.log('host : ', parsed['host']);
console.log('pathname : ', parsed['pathname']);

var query = parsed['query'];

console.log('group : ', query.group);
console.log('name : ', query.name);
console.log('since : ', query.since);
console.log('last : ', query.last);