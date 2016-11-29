var easyimg = require('easyimage');

var imageFile = './image.jpg';
var thumbnail = './image_thumb.jpg';

easyimg.thumbnail({
   src:imageFile,
   dst:thumbnail,
   width:100
}).then(function(image){
   console.log('Thumbnail created : ', image);
}, function(err) {						
   console.error('Thumbanil Create Error', err);
});