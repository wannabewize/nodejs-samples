const starwars = {
    title : '새로운 희망',
    year: 1977,
    director: '조지 루카스'
 }

 // 객체 내 모든 키들
 const keys = Object.keys(starwars);
 for(const key of keys ) {
    const value = starwars[key];
    console.log('prop : ', key, ' value :', value);
 }
 
 for(var prop in starwars) {
    console.log('prop : ', prop, ' value : ', starwars[prop]);
 }
 