/**
 * JSON 파싱
 */

const fs = require('fs');
fs.readFile('./topSongs.json', function(err, data) {
   if ( err ) {
      console.error('JSON Parsing Errro', err);
      return;
   }
   
   var root = JSON.parse(data);   
   var feed = root.feed;
   var entryList = feed.entry;
   
   entryList.forEach(function(item, index) {
      var name = item['im:name'].label;
      var artist = item['im:artist'].label;
      console.log((index + 1) + ' :  ' + name + ' - ' + artist);  
   });
});