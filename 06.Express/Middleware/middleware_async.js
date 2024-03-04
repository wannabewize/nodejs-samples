/**
 * 비동기 API와 미들웨어 작성
 */
const express = require('express');
const app = express();
app.listen(3000);

function callbackTask(callback) {
   setTimeout(() => {
      let result = Math.round(Math.random() * 1000);
      callback(null, result);
      // callback(`에러`);
  }, 3000);
}

function promiseTask() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let result = Math.round(Math.random() * 1000);
            resolve(result);
            // reject(`에러`);
        }, 3000);
    });
}

app.get('/callback', (req, res) => {
   callbackTask( (error, result ) => {
      if ( error ) {
         res.status(500);
         res.send(`Callback based Task Error with ${error}`);
         return;
      }
      res.send(`Callback based Task is Done with Random number ${result}`);
   });
});

app.get('/promise', (req, res) => {
    promiseTask().then( (result) => {
      res.send(`Promise based task is done with Random number ${result}`);
    }).catch( (error) => {
      res.status(500).send(`Promise based task Error with ${error}`);
    });
});

app.get('/await', async (req, res) => {
    try {
        let result = await promiseTask();
        res.send(`Promise based Task is done by async with Random number ${result}`);        
    } catch (error) {
        res.status(500).send(`Promise based Task by async Error with ${error}`);
    }
});