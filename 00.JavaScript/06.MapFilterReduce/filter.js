const array = [1, 2, 3, 4, 5, 6];

// Callback 함수 파라미터 : element, index, array

const filtered = array.filter( (element, index, array) => {
    if ( element % 2 == 0 ) {
        return true;
    }
    else {
        return false;
    }
});

console.log('even numbers :', filtered);


// 객체 배열과 filter

const movies = [
    {title: "새로운 희망", year: 1977},
    {title: "제국의 역습", year: 1980},
    {title: "제다이의 귀환", year: 1983},
    {title: "깨어난 포스", year: 2015},
    {title: "로그 원", year: 2016},
    {title: "라스트 제다이", year: 2017},
]

const moviesAfter2000 = movies.filter( item => item.year > 2000 );
console.log('2000년 이후의 영화 목록 :', moviesAfter2000);
