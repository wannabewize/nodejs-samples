const fsp = require('fs').promises;
const filePath = '../README.md';

fsp.access(filePath)
.then( () => fsp.readFile(filePath, 'utf8') )
.then( (result) => {
    console.log('FileAccess, FileRead Success');
})
.catch( (err) => {
    console.log('promise error :', err);
});
