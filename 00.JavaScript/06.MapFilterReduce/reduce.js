const array = [1, 2, 3, 4, 5];

// reduce 파라미터 : 콜백, 초기값
// Callback 함수 파라미터 : previous-value, current-value, index, array
// 초기값 입력하지 않으면 배열의 1번째 값을 사용
const sum = array.reduce( (prevValue, curValue, index, array) => {
    return prevValue + curValue;
});
console.log(`sum of ${array} is ${sum}`)

const movies = [
    {title: "새로운 희망", gross: 775},
    {title: "제국의 역습", gross: 547},
    {title: "제다이의 귀환", gross: 475},
    {title: "깨어난 포스", gross: 2068},
    {title: "로그 원", gross: 1056},
    {title: "라스트 제다이", gross: 1333}
]

// 초기값을 0으로 설정.
const totalGross = movies.reduce( (prevValue, curValue) => {
    return prevValue + curValue.gross;
}, 0);

console.log('Total gross :', totalGross);
