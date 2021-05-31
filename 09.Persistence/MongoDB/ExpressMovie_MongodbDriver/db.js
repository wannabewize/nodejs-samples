// 몽고디비 드라이버 로딩
const { MongoClient } = require("mongodb");

// 몽고디비 클라이언트 객체 생성
const uri = "mongodb://localhost";
const client = new MongoClient(uri, {useUnifiedTopology: true});

let db;

// 몽고디비 연결 함수. 콜백 함수 기반
exports.connect = (callback) => {
    // 몽고디비 연결
    client.connect()
    .then( () => {
        // 몽고디비 서버에 접속 후 movies-db 데이터베이스에 연결.
        db = client.db('movies-db');
        // 접속 성공하면 콜백 함수 호출. 에러가 없으므로 파라미터로 null 전달
        callback(null);
    })
    .catch( (error) => {
        // 접속 실패시 콜백 함수 호출하면서 에러 전달
        callback(error);
    });
}

// 연결된 데이터베이스 커넥션 제공
exports.get = () => {
    return db;
}