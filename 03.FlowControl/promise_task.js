function task(condition) {
      var success = condition;
      return new Promise((fullfill, reject) => {
            if (success)
                  fullfill('Success');
            else
                  reject('Error');
      });
}

// Promse를 사용하는 태스크
task(true).then( result => {
            console.log('Fullfilled : ', result);
      }, error => {
            console.log('Rejected : ', error);
      }
);

// reject 되는 프라미스
task(false).then( result => {
            console.log('Fullfilled : ', result);
      }, error => {
            console.log('Rejected : ', err);
      }
);
