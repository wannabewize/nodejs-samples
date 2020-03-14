const array = [1, 2, 3, 4];

// Callback 함수 파라미터 : element, index, array
const mappedArray = array.map( (element, index, array) => {
    return element * 2;
});

console.log(mappedArray);
// map의 결과는 배열, 원 배열과 원소의 개수가 같다.
console.log('length equality :', array.length === mappedArray.length);


// 객체의 배열 -> 문자열 배열로 변환
const movies = [
    {title: "새로운 희망", year: 1977},
    {title: "제국의 역습", year: 1980},
    {title: "제다이의 귀환", year: 1983}
]

const titles = movies.map( item => item.title );
console.log('titles :', titles);