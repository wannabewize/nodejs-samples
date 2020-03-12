const starwars = {
    title : '새로운 희망',
    year: 1977,
    director: '조지 루카스'
 }
 
 for(var prop in starwars) {
    console.log('prop : ', prop, ' value : ', starwars[prop]);
 }
 