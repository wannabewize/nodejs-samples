var FCM = require('fcm-push');

const apiKey = 'API-KEY';

const fcm = new FCM(apiKey);

const device1 = 'f0LDR_qDKEg:APA91bHSPvm0O5Uszz-FXKOg46XvW29NNhokYciW8-z7XXPKU7HdLr8Ot7BoTp6WmsI5dcIi6v9O-fsKQOIchwl8dRPuzc7UUqhV6a3eyoCvWrbVOi6arBIQGwPwtd3UOiOtvak8BGNC';

const message = {
   registration_ids : [device1],
   notification : {
      title : '메세지 제목',
      text : 'FCM 메세지 내용',
      icon : 'ic_football'
   }
};

fcm.send(message, (err, results) => {
   if (err) {
      console.error('Error : ', err);
      return;
   }

   console.log('Success : ', results);
});