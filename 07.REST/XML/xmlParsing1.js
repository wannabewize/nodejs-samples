var fs = require('fs');

// Semi-DOM Parsing
var xml2js = require('xml2js');

fs.readFile('./topSongs.xml', function(err, data) {
   if ( err ) {
      console.error('File Read Error', err);
      return;
   }
   
   var parser = new xml2js.Parser();
   parser.parseString(data, function(err, parserData) {
      if ( err ) {
         console.error('Xml Parser Error', err);
         return;
      }
      
      var feed = parserData.feed;
      var entryList = feed.entry;
      
      entryList.forEach(function(entry, index) {
         // console.log(entry);
         
         var name = entry.title[0];
         var artist = entry['im:artist'][0]['_'];
         
         console.log((index + 1) + ' :  ' + name + ' - ' + artist);           
      });            
   });
});

// Sax Parsing



// Pull Parsing