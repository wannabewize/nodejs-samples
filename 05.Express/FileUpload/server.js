const express = require('express');
const app = express();
const multer = require('multer')
const pathUtil = require('path');

const upload = multer({
    dest : 'uploads'
});

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// image 이름으로 파일 하나 올리기
app.post('/single', upload.single('image'),(req, res) => {
    const image = req.file;
    if ( ! image ) {
        res.status(400).send({msg:'no image'});
    }

    // 파일이 아닌 Text 데이터
    const fields = req.body;

    // 확장자
    const ext = pathUtil.extname(image.originalname);
    image.ext = ext;

    res.send({msg:'ok', image:image, fields:fields});
});


// 같은 이름(image)으로 다수의 파일 올리기
app.post('/array', upload.array('image'), (req, res) => {
    const images = req.files;

    if ( ! images ) {
        res.status(400).send({msg:'no images'});
    }

    // 파일이 아닌 Text 데이터
    const fields = req.body;

    res.send({msg:'ok', images:images, fields:fields});
});

// 서로 다른 이름으로 다수의 파일 올리기
app.post('/fields', upload.fields([{name:'image1'}, {name:'image2'}]), (req, res) => {
    const image1 = req.files.image1;
    const image2 = req.files.image2;
    console.log(image1, image2);

    if ( ! image1 || ! image2 ) {
        res.status(400).send({msg:'no image1, image2'});
    }

    // 파일이 아닌 Text 데이터
    const fields = req.body;

    res.send({msg:'ok', image1:image1, image2:image2, fields:fields});
});

// 다수의 파일과 데이터를 정해진 이름 없이 다룬다
app.post('/any', upload.any(), (req, res) => {
    const files = req.files;

    // 파일이 아닌 Text 데이터
    const fields = req.body;

    res.send({msg:'ok', files:files, fields:fields});
});