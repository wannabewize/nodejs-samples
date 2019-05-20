//
// Sequelize를 이용해서 SQL을 직접 실행하기
//
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1'});

function doSelect() {
    sequelize.query('SELECT * FROM Movies')
    .then(results => {
        // console.log('results :', results);
        const rows = results[0]; // mysql의 경우 같은 내용이 2개
        for (var item of rows) {
            console.log(item.movie_id, item.title);
        }
    })
    .catch(error => {
        console.error('Error :', error);
    });
}

async function doSelect2() {
    try {
        const result = await sequelize.query('SELECT * FROM Movies');
        const movieList = result[0]; // mysql의 경우 같은 내용이 2개
        for (var item of movieList) {
            console.log(item.movie_id, item.title);
        }
    }
    catch ( error ) {
        console.log('error : ', error);
    }
}

async function doUpdate() {
    try {
        const result = await sequelize.query('UPDATE Movies SET title="Avata" where title="아바타"'); 
        const updateResult = result[0];
        console.log('Update Success :', updateResult.message);
    }
    catch ( error ) {
        console.log('error : ', error);
    }
    // sequelize.query('UPDATE movies SET title="Avata" where title="아바타"')
    //     .then(result => {
    //         const updateResult = result[0];
    //         console.log('Update success : ', updateResult.message);
    //     }, error => {
    //         console.log('Update fila : ', error.message);
    //     });
}

doSelect();
// doSelect2();
// doUpdate();