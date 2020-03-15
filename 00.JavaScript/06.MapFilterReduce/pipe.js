const movies = [
    {title: "새로운 희망", year: 1977, us_gross: 460, ww_gross: 312},
    {title: "제국의 역습", year: 1980, us_gross: 290, ww_gross: 257},
    {title: "제다이의 귀환", year: 1983, us_gross: 166, ww_gross: 166},
    {title: "깨어난 포스", year: 2015, us_gross: 936, ww_gross: 1132},
    {title: "로그 원", year: 2016, us_gross: 532, ww_gross: 524},
    {title: "라스트 제다이", year: 2017, us_gross: 620, ww_gross: 713},
]

const totalGrossAfter2000 = movies
    .filter( item => item.year > 2000)
    .map( item => item.us_gross + item.ww_gross )
    .reduce( (prev, cur) => prev + cur );

console.log(totalGrossAfter2000);

