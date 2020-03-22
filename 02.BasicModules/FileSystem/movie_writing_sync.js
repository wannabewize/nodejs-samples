const fs = require('fs');

const movies = [
    {title: '해리포터와 마법사의 돌', year: 2001},
    {title: '해리포터와 비밀의 방', year: 2002},
    {title: '해리포터와 아즈카반의 죄수', year: 2004},
];

const path = './movie2.json';
const data = JSON.stringify(movies);

try {
    fs.writeFileSync(path, data);
}
catch ( error ) {
    console.error(error);
}
