const fsp = require('fs').promises;
const filePath = '../README.md';

const step1 = () => {
    // 실행은 하지만 실행 결과 종료/에러 상태를 모르는 상태 
    const delPromise = fsp.unlink('test.txt');
    console.log(delPromise);
}

const step2 = () => {
    fsp.access(filePath).then( (value) => {
        console.log('access success :', value);
    }, (err) => {
        console.log('access fail :', err);
    });
}

const step3 = () => {
    fsp.access(filePath).then( (value) => {
        console.log('access success :', value);
        fsp.readFile(filePath, 'utf8').then( (value) => {
            console.log('file read success :', value);
        },
        (err) => {
            console.log('file read error :', err);
        })
    }, (err) => {
        console.log('access fail :', err);
    });
}

// 에러 처리를 공동으로
const step4 = () => {
    fsp.access(filePath).then( (value) => {
        console.log('access success :', value);
        fsp.readFile(filePath, 'utf8').then( (value) => {
            console.log('file read success :', value);
        })
    })
    .catch( (err) => {
        console.log('promise error :', err);
    });
}

// Arrow Function, 1줄 리턴 코드는 {}와 return 생략 가능
const step5 = () => {
    fsp.access(filePath).then( () => fsp.readFile(filePath, 'utf8') )
    .then( (result) => {
        console.log('readFile : ', result);
    })
    .catch( (err) => {
        console.log('promise error :', err);
    });
}

// step1();
// step2();
// step3();
// step4();
step5();


