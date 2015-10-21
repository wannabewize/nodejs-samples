var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user : 'tacademy.expert@gmail.com',
        pass : 'PASSWORD'
    }
});

var mailOption = {
	from : 'tacademy.expert@gmail.com',
	to : 'wannabewize@gmail.com',
	subject : 'nodemailer test',
	text : 'Hello'
};

transporter.sendMail(mailOption, function(err, info) {
    if ( err ) {
        console.error('Send Mail error : ', err);
    }
    else {
        console.log('Message sent : ', info);
    }
});	