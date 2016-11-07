/**
 * 크롤링
 */

const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('./target.html', 'utf-8');
// console.log(html);

const $ = cheerio.load(html);
// $( selector, [context], [root] )
// id로 찾기 : #, class로 찾기 : .(dot)
const appleNode = $('.apple', '#fruits');
console.log('apple :', appleNode.text());

const fruits = $('#fruits').find('li');
console.log(fruits);
// for ( key in fruits) {
//    console.log(item);
// }