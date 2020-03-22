const fs = require('fs');
try {
    const path = './movies.json';
    const data = fs.readFileSync(path, 'utf8');
    console.log('movies :', data);
    
    const movies = JSON.parse(data);
    for(const item of movies) {
        console.log('제목:', item.title, '개봉:', item.year);
    }    
}
catch ( error ) {
    console.error(error);
}
console.log('== Done ==');