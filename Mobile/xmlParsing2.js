var fs = require('fs');
var xml = require('node-xml');
var parser = new xml.SaxParser(function (cb) {
   var interestingTag = false;
   var buffer = '';
   var currentSong;
   var topSongs = [];
   
   cb.onStartDocument(function () {
      console.log('SAX Parsing 시작');
   });
   cb.onEndDocument(function () {
      console.log('SAX Parsing 종료');
      
      topSongs.forEach(function(item, index) {
         console.log((index+1) + ' : ' + item.name + ' - ' + item.artist);
      })      
   });
   cb.onStartElementNS(function (elem, attrs, prefix, uri, namespaces) {
      switch(elem) {
         case 'entry':
            currentSong = {};
            break;
         case 'name':
         case 'artist':
            interestingTag = true;
            break;
         default:
            interestingTag = false;
      }
   });
   cb.onEndElementNS(function (elem, prefix, uri) {
      switch(elem) {
         case 'entry':
            topSongs.push(currentSong);
            currentSong = null;
            break;
         case 'name':
            currentSong.name = buffer;
            buffer = '';
            break;
         case 'artist':
            currentSong.artist = buffer;
            buffer = '';
            break;
      }      
   });
   cb.onCharacters(function (chars) {
      if ( interestingTag )
         buffer += chars.trim();      
   });
   cb.onError(function (msg) {
      console.error('Sax parsing Error', msg);
   });
});

parser.parseFile("./topSongs.xml");