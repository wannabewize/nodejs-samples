const fsp = require('fs').promises;

async function asyncTask1(filePath) {
    try {
        const result = await fsp.readFile(filePath, 'utf8');
        console.log('Task1 : 파일 읽기 성공');
    } catch (error) {
        console.log('Error :', error);
    }
}

const asyncTask2 = async (filePath) => {
    try {
        await fsp.access(filePath);
        console.log('Task2 : 파일 접근 가능');
        const result = await fsp.readFile(filePath, 'utf8');
        console.log('Task2 : 파일 읽기 성공');
    } catch (error) {
        console.log('Error :', error);
    }
}



asyncTask1('../README.md');
asyncTask2('../README.md');
console.log('== Done ==');