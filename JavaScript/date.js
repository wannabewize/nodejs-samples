var now = new Date();
console.log(now);

var date1 = new Date('2015-10-10');
console.log(date1);

var date2 = new Date(2015, 9, 10); // 10.10
console.log(date2);


console.log('Year : ', now.getFullYear());
console.log('Month : ', now.getMonth() + 1); // 0~11
console.log('Date : ', now.getDate());
console.log('Hour : ', now.getHours()); // 0~23
console.log('Minute : ', now.getMinutes()); // 0~59
console.log('Day : ', now.getDay()); // 0~6

var days = '일월화수목금토';
console.log(days.charAt(now.getDay()) + '요일');
