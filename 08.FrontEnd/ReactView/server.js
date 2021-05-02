const express = require('express');
const app = express();
// 템플릿 엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/images', express.static(__dirname + '/../../Resources/images'));

var data = [
	{title:'야구', image:'baseball.png'},
	{title:'농구', image:'basketball.png'},
	{title:'축구', image:'football.png'}	
];

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.get('/howAreYou', (req, res) => {
    res.render('howAreYou', {value: 'How are you?'})
});

app.get('/greeting', (req,res) => {
    res.render('greeting');
});

app.get('/sports', (req, res) => {
    res.render('sports', {title:'구기 종목', sports:data})
});

app.listen(3000, () => {
    console.log('server is running @3000');
});