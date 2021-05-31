const pathUtil = require('path');
const movieModel = require('../models/movieModel');

// 영화 목록 요청 다루기. 비동기 함수 호출로 async 함수로 선언
exports.showMovieList = async (req, res) => {
    // 영화 정보 요청에서 장르 정보 얻기
    const genre = req.query.genre;

    // 영화 정보 모델에서 영화 목록 데이터 얻기
    const movies = await movieModel.getMovies(genre);

    // 응답 메세지의 콘텐트 타입과 인코딩 설정
    res.set('Content-Type', 'text/html; charset=utf-8');

    // movieList 템플릿에 영화 목록 데이터를 movies 이름으로 전달하고 렌더링하기
    res.render('movieList', {movies: movies});
}

exports.showMovieDetail = async (req, res) => {
    const movieId = req.params.movieId;
    // 영화 ID를 이용해서 영화 모델에서 상세 정보 얻기
    const movie = await movieModel.getMovieDetail(movieId);

    // 영화가 없으면 404 에러
    if ( movie == null ) {
        res.sendStatus(404);
        return;
    }

    // 응답 메세지의 콘텐트 타입과 인코딩 설정
    res.set('Content-Type', 'text/html; charset=utf-8');
    // movieDetail 템플릿에 영화 상세 정보를 반영해서 렌더링하기
    res.render('movieDetail', {movie: movie});
}

exports.addComment = async (req, res) => {
    // 댓글이 작성되는 영화 ID를 라우트 파라미터에서 얻기
    const movieId = req.params.movieId;

    // 사용자가 입력한 유저 이름, 댓글, 평점
    const name = req.body.name;
    const text = req.body.text;
    const rating = req.body.rating;

    console.log('add comment :', name, text, rating);

    // 모델을 이용해서 댓글 추가하기
    await movieModel.addComment(movieId, name, text, rating);

    // PRG 패턴. 글 상세보기로 이동
    res.redirect(`/movies/${movieId}`);
    // res.send(`영화 ID : ${movieId} 이름 : ${name}, 댓글 : ${comment}, 평점 : ${rating}`);
}

exports.getComments = (req, res) => {
    const movieId = req.params.movieId;
    const comments = movieModel.getComments(movieId);
    res.send({count: comments.length, data: comments})
}

exports.sendNewMovieForm = (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('newMovie');
}

const fsp = require('fs').promises;


exports.addMovie = async (req, res) => {
    // 요청 메세지에서 제목, 방영연도, 장르, 출연 정보 얻기
    const title = req.body.title;
    const year = req.body.year;
    const genre = req.body.genre;
    const stars = req.body.stars;
    let image = null;    
    console.log('file :', req.file);
    if ( req.file ) {
        // 원래 파일의 확장자 얻기
        const extName = pathUtil.extname(req.file.originalname);
        // 현재 시간 정보를 이용해서 이미지 이름 변경하기
        // The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 
        const newFileName = `${Date.now()}${extName}`;     
    
        // 파일 이동 - 이전 경로, 새 경로
        const newFilePath = __dirname + '/../images/poster/' + newFileName;
        await fsp.rename(req.file.path, newFilePath);
        image = '/poster/' + newFileName;
    }

    // 모델을 이용해서 추가. 결과는 새롭게 추가된 영화 정보
    const movie = await movieModel.addMovie(title, year, genre, stars, image);
    console.log('add movie success :', movie);

    // 새로 입력한 영화 상세 보기로 이동
    res.redirect(`/movies/${movie._id}`);
}