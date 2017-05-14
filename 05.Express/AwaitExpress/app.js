const express = require('express');
const app = express();
app.listen(3000);

function asyncTask() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let result = Math.round(Math.random() * 1000);
            resolve(result);
            // reject(`에러 발생 테스트`);
        }, 3000);
    });
}

app.get('/promise', (req, res) => {
    asyncTask().then( (result, error) => {
        res.send(`OK with ${result}`);
    });
});

app.get('/await', async (req, res) => {
    try {
        let result = await asyncTask();
        res.send(`OK with ${result}`);        
    } catch (error) {
        res.status(500).send(`Error with ${error}`);
    }
});