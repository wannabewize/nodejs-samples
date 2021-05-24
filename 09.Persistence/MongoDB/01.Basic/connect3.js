const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/example';
const client = new MongoClient(url, {useNewUrlParser: true})

async function doIt() {
    try {      
        
        await client.connect();

        console.log('MongoDB 연결 성공');
        const db = client.db();     
        console.log('db :', db, ' type :', db.constructor);        

        await client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
doIt();