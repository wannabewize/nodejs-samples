const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';

module.exports = {
    db: null,
    getConn: async () => {
        if ( this.db != null ) {
            return this.db;  
        }

        const client = await MongoClient.connect(url, {useNewUrlParser: true})
        this.db = client.db('moviest');

        return this.db;
    }
}