var url = require('url');

var urlStr = 'http://idols.com/q?group=EXID&name=하니&since=';

var parsed = url.parse(urlStr);

console.log(parsed);

console.log('protocol : ', parsed.protocol);
console.log('host : ', parsed.host);
console.log('pathname : ', parsed.pathname);
console.log('query : ', parsed.query);

// parseQueryString - defulat = false
var parsed2 = url.parse(urlStr, true);

var query = parsed2.query;

console.log('group : ', query.group);
console.log('name : ', query.name);
console.log('since : ', query.since);
console.log('last : ', query.last);

// slashesDenoteHost - default = false
var parsed3 = url.parse('//idols.com/q?group=EXID&name=하니&since=', true);
console.log('path(slashesDenoteHost:false) : ',parsed3.path);

var parsed4 = url.parse('//idols.com/q?group=EXID&name=하니&since=', true, true);
console.log('path(slashesDenoteHost:true) : ',parsed4.path);