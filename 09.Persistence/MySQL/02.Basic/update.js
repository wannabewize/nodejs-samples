const pool = require('./dbConnection');

async function update1() {
    // 연도가 17로 들어간 데이터를 2017로 변경
    const sql = 'UPDATE movies SET year = ? WHERE year = ?';
    const params = [2017, 17];

    let conn;
    try {
        conn = await pool.getConnection();
        const ret = await conn.query(sql, params);
        const info = ret[0];
        console.log('수정 대상 Row(affectedRows) :', info['affectedRows']);
        console.log('수정된 Row(changedRows) :', info['changedRows']); 
        console.log('메세지 :', info['info']);       
    } catch (error) {
        console.error(error);  
    } finally {
        if ( conn ) conn.release();
    }
}

// UPDATE-SET
async function update2() {
    const sql = 'UPDATE movies SET ? WHERE title = ?';
    const param = {title: 'Avengers: Endgame', director: 'Anthony Russo, Joe Russo'};
    const condition = '어벤져스: 엔드게임';

    let conn;
    try {
        conn = await pool.getConnection();
        // 파라미터 순서는 SET의 값, Where 조건의 값
        const ret = await conn.query(sql, [param, condition] );
        const info = ret[0];
        
        console.log('수정 대상 Row(affectedRows) :', info['affectedRows']);
        console.log('수정된 Row(changedRows) :', info['changedRows']); 
        console.log('메세지 :', info['info']);        
    } catch (error) {
        console.error(error);  
    } finally {
        if ( conn ) conn.release();
    }
}

try {
    // update1();
    update2();
} catch (error) {
    
}