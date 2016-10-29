const querystring = require('querystring');

const str = 'group=EXID&name=하니&since=';

console.log('== Querystring 없이 분석 ==');

const parts = str.split('&');
console.log(parts);
parts.forEach(function(element) {
	var name = element.split('=')[0];
	var value = element.split('=')[1];
	console.log('name : ' + name + ' - value : ' + value);	
});

console.log('== Querystring 으로 분석 ==');

const parsed = querystring.parse(str);
console.log(parsed);

console.log('group', parsed.group);
console.log('name', parsed.name);
console.log('since', parsed.since);
console.log('last', parsed.last);

// 배열
const str2 = 'group=걸스데이&member=혜리&member=유라&member=민아';
const parsed2 = querystring.parse(str2);
console.log('member');
const members = parsed2['member']; // 배열
for ( var i = 0 ; i < members.length ; i++ ) {
   console.log(members[i]);
} 

// Custom separatoer, equal symbol
console.log(querystring.parse('name1*value1^name2*value2', '^', '*'));

// 쿼리 문자열 만들기
const queryObj = {
   name : 'IU',
   best : '좋은날'
};
const queryStr = querystring.stringify(queryObj);
console.log('stringify : ', queryStr);