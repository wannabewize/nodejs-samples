//
// Mongoose를 이용한 기본 CRUD
//

const Movie = require('./movieModel');

//
// 실행 순서
// 1. 초기 데이터 입력
// 2. 데이터 찾기
// 3. 데이터 수정
// 4. 데이터 삭제

// saveInitialData();
// findData();
// modifyData();
removeData();


async function saveInitialData() {
    // Callback Based
    var avata = new Movie({ title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 });
    avata.save( (err, product, numAffected) => {
        if (err) {
            console.error('인터스텔라 저장 에러 :', err);
            return;
        }
        console.log('인터스텔라 저장 성공 :', product, numAffected);
    });


    // Promise Based
    // notDefined는 스키마에 정의된 항목이 아니다. - 저장 안됨
    const starwars = new Movie({ title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015, notDefined: true });
    starwars.save().then( product => {
        console.log('스타워즈 저장 성공 : ', product);
    }).catch( err => {
        console.log('Save Rejected : ', err);
    });

    // Await/Async
    try {
        const resultAvata = await Movie.create({ title: '아바타', director: '제임스 카메론', year: 2010 });
        console.log('아바타 저장 성공 :', resultAvata);
        const resultBatman = await Movie.create({ title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 });
        console.log('아바타 저장 성공 :', resultBatman);
    }
    catch ( error ) {
        console.log('Creation Error :', error);
    }
}


async function findData() {
    // 콜백을 이용한 검색
    Movie.find({ year: { $gt: 2010 } }, (err, docs) => {
        console.log(docs);
    });

    // 쿼리 객체 - exec를 이용하는 방법
    Movie.findOne({ title: '인터스텔라' }).exec()
    .then( docs => {
        console.log(docs);
    })
    .catch( err => {
        console.error('Error :', err);
    });

    try {
        const docs = await Movie.where('year').gt(2010).exec();
        console.log('docs : ', docs);        
    } catch (error) {
        console.error('Error :', error);        
    }
}

async function modifyData() {
    Movie.updateMany({ director: '크리스토퍼 놀란' }, { $set: { director: 'Christopher Nolan' } })
    .then( ret => {
        console.log('update success. ret :', ret);
    })
    .catch( err => {
        console.error('update error :', err);
    });

    try {
        const doc = await Movie.findOne({ title: '아바타' });
        if ( ! doc ) {
            console.log('Can not find doc');
            return;
        }
        doc.title = 'Avata';
        await doc.save();
        console.log('find 후 변경 성공');
    } catch (error) {
        console.error('Error :', error);        
    }
}

async function removeData() {
    // 도큐먼트 삭제
    Movie.deleteMany({ director: '크리스토퍼 놀란' })
    .then( ret => {
        console.log('remove success. ret :', ret);
    })
    .catch( err => {
        console.error('remove error :', err);
    });

    try {
        const doc = await Movie.findOne({ title: '아바타' });
        if ( ! doc ) {
            console.log('Can not find doc');
            return;
        }
        await doc.remove();
        console.log('find 후 삭제 성공');        
    } catch (error) {
        console.error('Error :', error);        
    }
}
