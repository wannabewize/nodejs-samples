//
// backquote(`)를 이용한 문자열
//

var a = 5;
var b = 10;

var str1 = a + ' + ' + b + ' = ' + (a + b);
var str2 = `${a} + ${b} = ${a + b}`;
console.log(str1);
console.log(str2);


var str3 = 'Hello \nJavascript';

// `를 이용한 문자열은 엔터 적용 가능
var str4 = `Hello 
Multiline
String`;

console.log(str3);
console.log(str4);