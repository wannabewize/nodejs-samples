// Applies iteratee to each item in coll, concatenating the results.
// 동시 실행, 결과 순서 보장

const async = require('async');

const array = [1, 2, 3, 4, 5];

const makeDouble = (item) => {
    return new Promise((resolve, reject) => {
        console.log(`task${item} started`);
        const time = Math.random() * 1000 * 5 + 1;
        setTimeout(() => {
            console.log(`task${item} done`);
            resolve(item * 2);
        }, time);
    });
}


async function doItByAsyncMap(values) {
    async.map(array, async (item) => 
        await makeDouble(item)        
    , (err, results) => {
        console.log('err :', err);
        console.log('results : ', results);
    });
}

async function doItByPromise(values) {
    const promises = values.map( (item, index) => makeDouble(item) );
    const doubledNumbers = await Promise.all(promises);
    console.log('double numbers : ', doubledNumbers);
}

async function doItByForLoop(values) {
    let results = [];
    for (const item in values) {
        const ret = await makeDouble(item);
        results.push(ret);
    }
    console.log('results :', results);
}

doItByAsyncMap(array);
// doItByPromise(array);
// doItByForLoop(array);
