const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const Feed = require('./feed.js');

server.listen(3000);

app.get('/favicon.ico', (req, res) => {});

app.use(express.static('./public'));

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
   socket.emit('news', { hello: 'world' });
   socket.on('my other event', function (data) {
      console.log(data);
   });

   Feed.fetchRecentFeed((err, feeds) => {
      if ( err ) {
         console.log('Error ', error);
         socket.emit('error');
         return;
      }

      const data = {
         count : feeds.length,
         feeds : feeds
      };

      socket.emit('feed', data);
   });

   socket.on('write', (data) => {
      console.log('write feed ', data);

      Feed.writeFeed(data, (err, result) => {
         if ( err ) {
            console.log('Writing Feed Error : ',err);
            socket.emit('error');
            return;
         }
         io.emit('feed', {count:1, feeds:[result]});
         console.log('Writing feed success ', result);
      });
   });
});

