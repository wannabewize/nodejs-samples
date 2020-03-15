/**
 * Sequelize를 이용한 영화 정보 CRUD 예제
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'dev', 'secret', {
    dialect: 'mysql', host: '127.0.0.1'
});
const Op = Sequelize.Op;

class Movie extends Sequelize.Model {}
Movie.init({
    movie_id: {
        type: Sequelize.INTEGER(2),
        primaryKey: true,
        autoIncrement: true },
    title: Sequelize.STRING,
    director: {
        type: Sequelize.STRING,
        allowNull: true
    },
    year: {
        type: Sequelize.INTEGER,
        defaultValue: 0}
}, {sequelize});

//
// 실행 순서
// 1. Movie 모델 정의
// 2. 영화 정보 추가
// 3. 영화 정보 보기
// 3. 수정
// 4. 삭제

// prepareModel();
// addNewMovies();
showMovieList();
// showMovieSome();
// showMovieDetail(8);
// modify();
// removeMovie();


async function prepareModel() {
    try {
        await Movie.sync({force:true});
    }
    catch (error) {
        console.log('Movie.sync Error ', error);
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

    const creates = movies.map( item => Movie.create(item) );
    Promise.all(creates)
    .then( ret => {
        console.log('Create Success : ', ret);
    }).catch( err => {
        console.error('Create Failure :', err);
    });

    try {
        let result1 = await Movie.create({
            title: '스파이더맨: 홈커밍',
            director: '존 왓츠'
        });
        console.log('Create success ', result1);
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

function showMovieList() {
    Movie.findAll({ attributes: ['movie_id', 'title'] })
    .then( results => {
        for (var item of results) {
            console.log('movie_id : ', item.movie_id, ' title : ', item.title);
        }
    })
    .catch( error => {
        console.error('Error :', error);
    });
}

async function showMovieSome() {
    try {
        let results = await Movie.findAll({where: { year:{[Op.gt]:2000}}});
        for (var item of results) {
            console.log('movie_id : ', item.movie_id, ' title : ', item.title);
        }
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

async function showMovieDetail(movieId) {
    try {
        // Primary Key로 찾기
        let result = await Movie.findByPk(movieId);
        console.log('id : ', result.movie_id, ' title : ', result.title, ' director : ', result.director);
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function modify() {
    try {
        let result = await Movie.update({ title: 'Avengers: Endgame' }, { where: { title: '어벤져스: 엔드게임' } });
        console.log('Modify success :', result);
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