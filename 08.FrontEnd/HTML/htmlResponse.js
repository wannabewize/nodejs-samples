const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../Resources'));

app.listen(3000);

const data = [
	{title:'야구', image:'baseball.png'},
	{title:'농구', image:'basketball.png'},
	{title:'축구', image:'football.png'}	
];

app.get('/', (req, res) => {
    let html = '';
    html += '<html>';
    html += '<head>';
    html += '<link rel="stylesheet" href="lib/sports.css">';
    html += '<head>';
    html += '<body>';
    html += '<h1>Sports</h1>';
    html += '<ul>';
    for(var item of data) {
        html += '<li>';
        html += '<img src="/images/' + item.image  + '">'
        html += item.title;
        html += '</li>';
    }
    html += '</ul>';
    html += '</body>';
    html += '</html>';
    
    res.send(html);
});
