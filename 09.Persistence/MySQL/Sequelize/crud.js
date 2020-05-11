/**
 * Sequelize를 이용한 영화 정보 CRUD 예제
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
    dialect: 'mysql', host: '127.0.0.1'
});
const Op = Sequelize.Op;

class Movie extends Sequelize.Model {}
Movie.init({
    title: Sequelize.STRING,
    director: {
        type: Sequelize.STRING,
        allowNull: true
    },
    year: {
        type: Sequelize.INTEGER,
        defaultValue: 0}
}, {sequelize});

async function prepareModel() {
    try {
        await Movie.sync({force:true});
        sequelize.close();
    }
    catch (error) {
        console.log('Movie.sync Error ', error);
    }
}

async function addNewMovie() {
    try {
        const ret = await Movie.create({
            title: '스파이더맨: 홈커밍',
            director: '존 왓츠'
        }, {logging: false});
        const newData = ret.dataValues;
        console.log(newData);
        console.log('Create success');
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

async function addNewMovies() {
    const movies = [
        { title: '어벤져스: 엔드게임', director: '앤서니 루소, 조 루소', year: '2019'},
        { title: '캡틴 마블', director: '애나 보든, 라이언 플렉', year: '2019'},
        { title: '앤트맨과 와스프', director: '페이턴 리드', year: '2018'},
        { title: '어벤져스: 인피니티 워', director: '앤서니 루소, 조 루소', year: '2018'},
        { title: '블랙 팬서', director: '라이언 쿠글러', year: '2018'},
        { title: '토르: 라그나로크', director: '타이카 와이티티', year: '2017'}
    ];

    const creates = movies.map( item => Movie.create(item, {logging: false}) );
    Promise.all(creates)
    .then( ret => {
        const newAddIds = ret.map( result => result.dataValues.id );
        console.log('Create Success. new ids:', newAddIds);
    }).catch( err => {
        console.error('Create Failure :', err);
    });
}

function showMovieList() {
    Movie.findAll({})
    .then( results => {
        for (var item of results) {
            console.log('id:', item.id, ' title:', item.title);
        }
    })
    .catch( error => {
        console.error('Error :', error);
    });
}

async function showMovieIdTitleList() {
    try {
        const ret = await Movie.findAll({ attributes: ['id', 'title'] });
        for(item of ret) {
            console.log('id : ', item.id, ' title : ', item.title);
        }    
    } catch (error) {
        console.error('Error :', error);    
    }
}

async function showMovieOne(movieId) {
    try {
        // Primary Key로 찾기
        console.log('Find by PK', movieId);
        let result = await Movie.findByPk(movieId);
        // let result = await Movie.findOne({where: {year: {[Op.eq]: 2019}}});
        if ( result ) {
            console.log(result.dataValues);
        }
        else {
            console.log('no data');
        }
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function showMovieSome() {
    try {
        let results = await Movie.findAll({where: { year:{[Op.gt]: 2000}}});
        for (var item of results) {
            console.log('id : ', item.id, ' title : ', item.title);
        }
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

async function showMovieCount() {
    try {
        let {count, rows} = await Movie.findAndCountAll({where: { year:{[Op.gt]: 2000}}});
        console.log('count:', count, 'row.count:', rows.length);

        const countOnly = await Movie.count({where: { year:{[Op.gt]: 2000}}});
        console.log(countOnly);
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

async function modifyByCondition() {
    try {
        let result = await Movie.update(
            { title: 'Avengers: Endgame' },
            { where: { title: '어벤져스: 엔드게임' }}); // {[Op.eq]: '어벤져스: 엔드게임' }}도 가능
        console.log('Modify success :', result);
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function modifyByModel(movieId) {
    try {
        let movie = await Movie.findByPk(movieId);
        movie.title = "modifiedTitle"

        let ret = await movie.save();
        let changedMovie = ret.dataValues;
        console.log('ret :',changedMovie);
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function removeMovie() {
    try {
        let result = await Movie.destroy({ where: { year: { [Op.gt]: 2018 } } });
        console.log('Remove success :', result);
    }
    catch (error) {
        console.log('Remove Error :', error);
    }
}


//
// 1. Movie 모델 정의
// 2. 영화 정보 추가
// 3. 영화 정보 보기
// 3. 수정
// 4. 삭제

// prepareModel();
// addNewMovie();
// addNewMovies();
// showMovieList();
// showMovieIdTitleList();
// showMovieOne(3);
// showMovieSome();
// showMovieCount();
// modifyByCondition();
// modifyByModel(2);
removeMovie();