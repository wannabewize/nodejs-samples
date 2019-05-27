const dbConn = require('./connection');
const ObjectID = require('mongodb').ObjectID;

doIt();

async function doIt() {
   try {
      const db = await dbConn.getConn();
      const movies = db.collection('movies');

      // ObjectID 문자열 얻기
      const ret = await movies.findOne({});
      const objectIdStr = ret._id.toString();
   
      const item1 = await movies.findOne({_id:objectIdStr})
      if ( item1 ) {
         console.log('Find By ID Str Success :', item1);
      }
      else {
         console.log('Find By ID Str Failure');
      }
   
      const docId = new ObjectID(objectIdStr);
      const item2 = await movies.findOne({_id:docId})
   
      if ( item2 ) {
         console.log('Find By ObjectID(ID) Success :', item2);
      }
      else {
         console.log('Find By ObjectID(ID) Failure');
      }      

   } catch (error) {
      console.error('Error :', error);
   }
}