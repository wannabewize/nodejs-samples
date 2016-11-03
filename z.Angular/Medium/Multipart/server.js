const express = require('express');
const formidable = require('formidable');
const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/files'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});


app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
   form.keepExtension = true;
   form.uploadDir = '/files';
	form.parse(req, (err, fields, files) => {
		if ( err ) {
			console.log('Error : ', err);
			res.status(400).send({msg:'error'});
			return;
		}

		console.log('files : ', files);

		res.send({msg:'success'});
	});
});

app.listen(3000, (err) => {
	if ( err ) {
		console.error('Error', err);
		return;
	}
	console.log('Server is running @ 3000');
});