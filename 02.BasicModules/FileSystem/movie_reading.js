const fs = require('fs');
const path = __dirname + '/movies.json';
const data = fs.readFile(path, 'utf8', (error, data) => {
    if ( error ) {
        console.error(error);
        return;
    }
    const movies = JSON.parse(data);
    for(const item of movies) {
        console.log('제목:', item.title, '개봉:', item.year);
    }    
    console.log('== Done ==');    
});

