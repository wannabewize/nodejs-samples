var gcm = require('node-gcm');

var sender = new gcm.Sender('AIzaSyAMbmUzhMj8UqqIcap3-Y-txL3KKXCoJqw');

var message = new gcm.Message();
message.addData('key1', 'msg1');

var regIds = ['APA91bF4EVooRpu4RYonXVicoNwIYRvX2kGeXaaCsCap97O3bllNNzw2I-svtHYO_dKdg0WpINL46KmEQGZ20rowP_H1VvlzXcHrMO58kMukN0YTneSw-7_f93apJCqvE4b3JBbrKBPFHqnBthuxYRCd-hWKW0rvKEMgPM0mfpf8WD0cWXBtjQM'];

sender.send(message, regIds, function(err, result) {
  if (err) {
    console.error('Error : ' + err);
  }
  else {
    console.log('Success : ' + result);
  }
});