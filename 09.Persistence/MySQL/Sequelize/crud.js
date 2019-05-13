/**
 * Sequelize를 이용한 영화 정보 CRUD 예제
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'root', '', {});

const Movie = sequelize.define('movie', {
    movie_id: { type: Sequelize.INTEGER(2), primaryKey: true, autoIncrement: true },
    title: Sequelize.STRING,
    director: Sequelize.STRING,
    year: Sequelize.INTEGER
}, { timestamps: false });

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
// showMovieDetail('제임스 카메론');
// modify();
// removeMovie();


async function prepareModel() {
    try {
        await Movie.sync();
    }
    catch (error) {
        console.log('Movie.sync Error ', error);
    }
}


async function addNewMovies() {
    try {
        let result1 = await Movie.create({
            title: '아바타',
            director: '제임스 카메론',
            year: 2010
        });
        console.log('Create success ', result1);

        let result2 = await Movie.create({
            title: '스타워즈4',
            director: '제임스 카메론',
            year: 1977,
            synopsis: '머나먼 옛날..'
        });

        console.log('Create success ', result2);
    }
    catch (error) {
        console.log('Error : ', error);
    }

}

async function showMovieList() {
    try {
        let results = await Movie.findAll({ attributes: ['movie_id', 'title'] });
        for (var item of results) {
            console.log('movie_id : ', item.movie_id, ' title : ', item.title);
        }
    }
    catch (error) {
        console.log('Error : ', error);
    }
}

async function showMovieDetail(title) {
    try {
        let result = await Movie.findOne({
            where: {
                director: title,
                year: { $gt: 2000 }
            }
        });
        console.log('id : ', result.movie_id, ' title : ', result.title, ' director : ', result.director);
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function modify() {
    try {
        let result = await Movie.update({ title: 'Avata' }, { where: { title: '아바타' } });
        console.log('Modify success :', result);
    }
    catch (error) {
        console.log('Error :', error);
    }
}

async function removeMovie() {
    try {
        let result = Movie.destroy({ where: { year: { $lt: 2000 } } });
        console.log('Remove success :', result);
    }
    catch (error) {
        console.log('Remove Error :', error);
    }
}