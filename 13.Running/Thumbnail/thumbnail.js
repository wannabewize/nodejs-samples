const thumb = require('node-thumbnail').thumb;

thumb({
    source: './image.jpg',
    destination: './thumb'
  }).then( (ret) => {
    console.log('Success : ', ret);
  }).catch( (error) => {
    console.log('Error', error);
  });