const fsp = require('fs').promises;

async function asyncFileReadTask(filePath) {
    try {
        await fsp.access(filePath);
        const result = await fsp.readFile(filePath, 'utf8');
        console.log('result : ', result);
    } catch (error) {
        console.log('Error :', error);
    }
}

asyncFileReadTask('../README.md');