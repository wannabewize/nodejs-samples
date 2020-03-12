let starwars = {
    title: 'Star Wars',
    director: 'George Lucas'
}

// 프로퍼티 접근
console.log(starwars.title);
console.log(starwars['title']);


// computed property

let starwarsSeries = {};

starwarsSeries['title1'] = '보이지 않는 위험';
starwarsSeries['title2'] = '클론의 습격';
starwarsSeries['title3'] = '시스의 복수';

console.log(starwarsSeries);

let number = 4;
starwarsSeries['title' + number++] = '새로운 희망';
starwarsSeries['title' + number++] = '제국의 역습';
starwarsSeries['title' + number++] = '제다이의 귀환';

console.log(starwarsSeries);