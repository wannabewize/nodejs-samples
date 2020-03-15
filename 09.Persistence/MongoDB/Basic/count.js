const dbConn = require('./connection');

// countAll();
countCondition();

async function countAll() {
    const db = await dbConn.getConn();

    const movies = db.collection('movies');   

   movies.countDocuments()
   .then( ret => { console.log('ret : ', ret) })
   .catch( err => {console.log('count error ;', err); });
}

async function countCondition() {
    try {
        const db = await dbConn.getConn();

        const movies = db.collection('movies');  
        
        const ret = await movies.countDocuments({ year: { $lt: 2000 } });
        console.log('Count, year > 2000: ', ret);
    } catch (error) {
        console.error('Count year > 2000 Error : ',err);        
    }
}
