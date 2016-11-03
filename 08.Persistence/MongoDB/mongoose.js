var Movie = require('./model').Movie;

// saveInitialData();
findData();
// modifyData();
// removeData();

function resolved(result) {
   console.log('Resolved : ', result);
}

function rejected(err) {
   console.log('Rejected : ', err);
}

function saveInitialData() {
   // Callback Based
   var avata = new Movie({title:'인터스텔라', director:'크리스토퍼 놀란', year:2014});
   avata.save(function (err, product, numAffected) {
   if ( err ) {
      console.error('Document save error : ', err);
      return;
   }
   console.log('Document Save success : ', product, numAffected);
   });


   // Promise Based
   // notDefined는 스키마에 정의된 항목이 아니다. - 저장 안됨
   var starwars = new Movie({title:'스타워즈7', director:'JJ 에이브럼스', year:2015, notDefined:true});
   starwars.save().then(function(product) {
      console.log('Save Resolved : ', product);
   }, function rejected(err) {
      console.log('Save Rejected : ', err);
   });   
   
   Movie.create({title:'아바타', director:'제임스 카메론', year:2010}).then(resolved, rejected);
   Movie.create({ title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 }).then(resolved, rejected);
}


function findData() {
   // 콜백을 이용한 검색
   Movie.find({year:{$gt:2010}}, function(err, docs) {
      console.log(docs);
   });   
      
   // 쿼리 객체 - exec를 이용하는 방법
   Movie.findOne({title:'인터스텔라'}).exec(function(err, docs) {
      console.log(docs);
   });   

   Movie.where('year').gt(2010).exec(function(err, docs) {
      console.log('year > 20!0 : ', docs);
   });
}

function modifyData() {
   // 도큐먼트 수정 후 저장 
   Movie.findOne({title:'아바타'}).exec(function(err, doc) {
      if ( doc ) {
         doc.title = 'Avata';
         doc.save(function(err, product) {
            console.log('Modify and Save : ', product);
         });         
      }
   });
   
   Movie.update({director:'크리스토퍼 놀란'}, {$set:{director:'Christopher Nolan'}} ).then(resolved, rejected);
}

function removeData() {
   // 도큐먼트 삭제
   Movie.findOne({title:'아바타'}).exec(function(err, doc) {
      if ( doc ) {
         doc.title = 'Avata';
         doc.remove(function(err, product) {
            console.log('Find and Remove : ', err, product);
         });         
      }
   });
   
   Movie.remove({director:'크리스토퍼 놀란'}).then(resolved, rejected);
}
