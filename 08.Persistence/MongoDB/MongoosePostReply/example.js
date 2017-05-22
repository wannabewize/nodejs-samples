//
// 글과 댓글
//

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const url = 'mongodb://localhost:27017/samples';
mongoose.connect(url);

// 글과 댓글 모델
const Post = require('./post');
const Reply = require('./reply').Reply;

db.on('error', function (err) {
    console.log('Error : ', err);
});
db.on('open', function () {
    console.log('db open');
    // 글쓰기
    // writePost('IU', '이렇게 좋은 날');    
    // writePost('여자친구', '오늘부터 우리는');

    // IU가 쓴 글에 댓글 달기
    // writeReply('IU', '좋아요~');
    // writeReply('여자친구', '뭘까요?');
});

// 글 쓰기
async function writePost(name, text) {
    try {
        const post = new Post({ name: name, text: text });
        await post.save();
        console.log('Write post Success');
    }
    catch ( error ) {
        console.log('Write post error :', error);
    }
}

// 글을 찾아서 댓글 쓰기
async function writeReply(name, text) {
    try {
        // 글 찾기
        const doc = await Post.findOne({ name: name });
        if ( ! doc ) {
            console.log('Can not find doc');
            return;
        }

        // 댓글 쓰기
        const reply = new Reply({ text: text });
        doc.reply.push(reply);

        const result = await doc.save();
        console.log('Save Reply success :', result);
    }
    catch ( error ) {
        console.log('Error :', error);
    }
}