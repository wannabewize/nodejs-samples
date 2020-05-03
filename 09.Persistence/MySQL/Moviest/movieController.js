const movieModel = require('./movieModel');

movieModel.initModel((err) => {
    if (err) {
        console.log('모델 준비 실패', err);
        return;
    }

    const movie = {
        title: 'Avengers: Endgame',
        director: 'Anthony Russo, Joe Russo',
        year: 2019}

    movieModel.insertMovie( movie, (err, ret) => {
        if (err) {
            console.log('데이터 입력 실패', err);
            return;
        }

        movieModel.getMovieList( (err, ret) => {
            if (err) {
                console.log('데이터 요청 실패', err);
                return;
            }

            console.log('영화 목록 :', ret);
        });
    });
});