/**
 * 비동기 API와 미들웨어 작성
 */
const express = require('express');
const app = express();
app.listen(3000);

function asyncTask(callback) {
   setTimeout(() => {
      let result = Math.round(Math.random() * 1000);
      callback(null, result);
      // callback(`에러`);
  }, 3000);
}

function asyncTask2() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let result = Math.round(Math.random() * 1000);
            resolve(result);
            // reject(`에러`);
        }, 3000);
    });
}

app.get('/callback', (req, res) => {
   asyncTask( (error, result ) => {
      if ( error ) {
         res.status(500);
         res.send(`Error with ${error}`);
         return;
      }
      res.send(`OK with ${result}`);
   });
});

app.get('/promise', (req, res) => {
    asyncTask2().then( (result) => {
      res.send(`OK with ${result}`);
    }).catch( (error) => {
      res.status(500).send(`Error with ${error}`);
    });
});

app.get('/await', async (req, res) => {
    try {
        let result = await asyncTask2();
        res.send(`OK with ${result}`);        
    } catch (error) {
        res.status(500).send(`Error with ${error}`);
    }
});