const express = require('express');
const app = express();


// Pug 템플릿 엔진 사용 설정
const pug = require('pug');
app.set('view engine', 'pug');

// 정적 파일 제공 미들웨어로 이미지 파일 제공하기
app.use( express.static('images') );

// 바디 파서로 POST 요청 메세지 분석하기
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 영화 정보 요청 라우터
const movieRouter = require('./routes/movieRouter');
app.use(movieRouter);

const db = require('./db');
db.connect( (error) => {
    if ( !error ) {
        console.log('데이터베이스 연결 성공했습니다.');
        app.listen(3000, () => {
            console.log('Express Movies 서버가 3000 포트로 시작했습니다.')
        });        
    }
    else {
        console.log('데이터베이스 연결 실패했습니다.', error)
    }
});