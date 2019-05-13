const pool = require('./dbconnection');

async function doIt() {
    try {
        const conn = await pool.getConnection();
       
        console.log('풀에서 커넥션 얻기 성공');
            
        // 커넥션을 풀에 반환
        conn.release();
         
        console.log('커넥션에 풀 반환');
         
        // 풀 종료
        pool.end();
        console.log('풀 닫기');   
    } catch (error) {
        console.error('error connecting: ', error);
    }
}

doIt();