// 파일에서 초기 데이터를 읽어오는 코드 제거
/*
const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../movies.json');
const movies = JSON.parse(data);

let movieId = movies.length;
*/
// 몽고디비 드라이버에서 ObjectID 타입 정의 로딩
const { ObjectID } = require('mongodb');
const db = require('../db');
console.log('db ;', db);

exports.addComment = async (movieId, name, text, rating) => {
    // movies 콜렉션 얻기
    const collection = db.get().collection('movies');

    const filter = { _id: new ObjectID(movieId) };
    const updateDoc = { $push: { comments: {name, text, rating} } };
    const ret = await collection.updateOne(filter, updateDoc);
    console.log('add comment ret:', ret);
}

// 새로운 영화 추가
exports.addMovie = async (title, year, genre, stars, image) => {
    // movies 콜렉션 얻기
    const collection = db.get().collection('movies');

    const ret = await collection.insertOne({title, year, stars, genre, comments: [], image});

    console.log('add new movie :', ret.ops[0]);

    // 새로 추가한 영화 정보를 반환
    return ret.ops[0];
}

// 영화 목록 얻기. 프라미스 기반의 코드를 실행하기 위해서 async로 선언 
exports.getMovies = async (genre) => {
    // movies 콜렉션 얻기    
    const collection = db.get().collection('movies');

    // 장르(genre)로 필터링 조건 설정하기
    let condition = {}
    if ( genre ) {
        condition = { 'genre': genre};
    }

    // 프로젝션은 find시 도큐먼트에서 필요한 속성만 얻어오도록 합니다.
    const projection = { projection: {_id:1, title: 1, genre: 1} };
    // 콜렉션에서 find함수로 도큐먼트 얻기, 프로젝션으로 _id, title, genre 만 얻기
    const docs = await collection.find(condition, projection).toArray();
    return docs;
}

// 영화 id를 이용해서 특정 영화 1개의 정보 얻기
exports.getMovieDetail = async (movieId) => {
    // 데이터베이스 커넥션을 이용해서 movies 자료 얻기
    const collection = db.get().collection('movies');

    // 문자열을 ObjectID 타입으로 필터링
    const doc = await collection.findOne({_id: new ObjectID(movieId)});

    console.log('doc:', doc);
    return doc;
}