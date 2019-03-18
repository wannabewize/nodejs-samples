const querystring = require('querystring');

const queryStr1 = 'genre=action&name=ScarlettJohansson&since=';

console.log('== Querystring 없이 분석 ==');

const parts = queryStr1.split('&');
console.log(parts);
parts.forEach((element) => {
	var name = element.split('=')[0];
	var value = element.split('=')[1];
	console.log('name : ' + name + ' - value : ' + value);	
});

console.log('== QueryString 으로 분석 ==');

const parsed = querystring.parse(queryStr1);
console.log(parsed);

console.log('genre :', parsed.genre);
console.log('name :', parsed.name);
console.log('since :', parsed.since);
console.log('last :', parsed.last); // 없는 항목

// 배열
console.log('== QueryString, 배열 다루기');
const str2 = 'group=트와이스&member=사나&member=쯔위&member=모모';
const parsed2 = querystring.parse(str2);
console.log('member :', parsed2.member);
const members = parsed2['member']; // 배열

// &, = 대신 다른 기호 사용하기. Custom separatoer, equal symbol
console.log('== QueryString, 커스텀 기호로 구성된 쿼리 문자열');
const queryStr2 = 'title*starwars^genre*SpaceFantasy';
console.log('쿼리 문자열 :', queryStr2);
const parsed3 = querystring.parse(queryStr2, '^', '*');
console.log(`title : ${parsed3.title}, genre : ${parsed3.genre}`);

// 쿼리 문자열 만들기
console.log('== QueryString, 쿼리 문자열 만들기');
const queryObj = {
   name : 'IU',
   best : '좋은날'
};
console.log('source object :', queryObj);
const queryStr = querystring.stringify(queryObj);
console.log('stringify : ', queryStr);