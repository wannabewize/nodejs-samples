var mysql = require('mysql');
var dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'cafe'
};

var conn = mysql.createConnection(dbConfig);

// insertCafeInfo();
showCafes();
// showCafeDistance();

function insertCafeInfo() {
    conn.connect(function (err) {
        if (err) {
            console.error('MySQL 연결 실패 : ', err);
            return;
        }

        var sql1 = 'INSERT INTO cafes(title, location) VALUES ("스타벅스", Point(36.350412, 127.384548));';
        conn.query(sql1, function (err, result) {
            if (err) {
                console.error('Insert Error ', err);
                return;
            }
            console.log('INSERT1 성공');
        });

        var sql2 = 'INSERT INTO cafes(title, location) VALUES (?, GeomFromText(?));';
        conn.query(sql2, ['카페베네', 'POINT(36.74 126.11)'], function (err, result) {
            if (err) {
                console.error('Insert Error ', err);
                return;
            }
            console.log('INSERT2 성공');
        });

        // 대략 1초뒤 연결 종료
        setTimeout( ()=> {
            conn.end();
        }, 1000);
    });
}

function showCafes() {
    conn.connect(function (err) {
        if (err) {
            console.error('MySQL 연결 실패 : ', err);
            return;
        }

        // 현재 거리순 정렬, x,y 좌표 별도로 얻기
        var sql = 'SELECT title, X(location) as lat, Y(location) as lnt from cafes order by ST_Distance(location, Point(30, 126) );';
        conn.query(sql, function (err, results) {
            if (err) {
                console.error('SELECT, OrderBy St_Distnace Error ', err);
                return;
            }
            console.log('SELECT, OrderBy St_Distnace 성공');
            results.forEach(function (item) {
                console.log('Title : ' + item.title + ' Location : ' + item.lat + ',' + item.lnt);
            });
            conn.end();        
        });
    });
}

function showCafeDistance() {
    conn.connect(function (err) {
        if (err) {
            console.error('MySQL 연결 실패 : ', err);
            return;
        }

        // 거리 구하기
        var sql = 'SELECT title, ST_Distance(location, Point(30, 126)) as dist from cafes';
        conn.query(sql, function (err, results) {
            if (err) {
                console.error('SELECT, St_Distnace Error ', err);
                return;
            }
            console.log('SELECT, St_Distnace 성공');
            results.forEach(function (item) {
                console.log('Title : ' + item.title + ' 거리 : ' + item.dist);
            });
            conn.end();
        });
    });
}



