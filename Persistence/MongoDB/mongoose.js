var Movie = require('./model').Movie;

// saveInitialData();
// findData();
// modifyData();
removeData();

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
   var starwars = new Movie({title:'스타워즈7', director:'JJ 에이브럼스', year:2015});
   starwars.save().then(function(product) {
      console.log('Save Resolved : ', product);
   }, function rejected(err) {
      console.log('Save Rejected : ', err);
   });   
   
   Movie.create({title:'아바타', director:'제임스 카메론', year:2010}).then(resolved, rejected);
   Movie.create({ title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 }).then(resolved, rejected);
}


function findData() {
   Movie.findOne({title:'인터스텔라'}).exec(function(err, docs) {
      console.log(docs);
   });   
   
   Movie.where('year').gt(2010).exec(function(err, docs) {
      console.log('year > 20!0 : ', docs);
   });
}

function modifyData() {
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
