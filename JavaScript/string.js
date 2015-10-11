var str1 = 'hello "world"';
var str2 = "'hello' world";

console.log(str1);
console.log(str2);

var length = str1.length;
console.log('length : ', length);

// Concat
var str3 = 'hello' + ' world';
var str4 = 'hello'.concat(' world');

// Compare
console.log('str3 == str4 : ',str3 == str4);
console.log('str3 === str4 : ', str3 === str4);


var str = 'Hello World';

// Find, Index
var index1 = str.indexOf('llo');
console.log('llo index : ', index1);

var index2 = str.indexOf('lll');
console.log('lll index : ', index2);

var index3 = str.lastIndexOf('o');
console.log('last index : ', index3);


// substring
var subStr1 = str.slice(0, 4);
console.log('slide(0, 4) : ', subStr1);

var subStr2 = str.substring(3, 7);
console.log('substring(3, 7) : ', subStr2);

var subStr3 = str.substr(3, 7);
console.log('substr(3, 7) : ', subStr3);

// lower, upper
var lowerStr = str.toLowerCase();
console.log('toLowerCase : ', lowerStr);

var upperStr = str.toUpperCase();
console.log('toUpperCase : ', upperStr);


// Split
var values = '1,2,3,4,5';
var csv = values.split(',');
console.log('split : ',csv);