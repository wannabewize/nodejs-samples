var request = require('request');
var cheerio = require('cheerio');

// convert from UTF-8 to ISO-8859-1
var Buffer = require('buffer').Buffer;
var Iconv  = require('iconv').Iconv;
var iconv = new Iconv('EUC-KR', 'UTF-8');
var iconv2 = require('iconv-lite');

var assert = require('assert');

request({
    url: 'http://www.animal.go.kr/portal_rnl/abandonment/loss_list.jsp',
    headers: {}
    // encoding : 'utf-8'
}, function(err, res, html) {
    if (err) {
        console.log(err);
        return;
    }

   //  console.log( iconv.convert(html).toString('utf8') );
   const decoded = iconv2.decode(html, 'euc-kr');
   // console.log(decoded);
   const result = iconv2.encode(decoded, 'utf8');
   console.log(result.toString());


    // require('fs').writeFileSync('test.html', html);
    //
    // console.log(html);
    // html.replace('charset=euc-kr','charset=utf-8');
    // console.log(html);
    //
    // buf = iconv.encode(html, 'utf-8');
    // console.log(buf);
    // str = iconv.decode(buf, 'utf-8');
    // console.log(str);
    //
    // var buff = iconv.convert(html);
    // console.log(buff.toString('utf-8'));


    // var $ = cheerio.load(html, {
    //   withDomLvl1: true,
    //   normalizeWhitespace: false,
    //   xmlMode: false,
    //   decodeEntities: true
    // });
    // var postList = $('.abandarea').find('.thumbnail01');
    // // console.log(postList);
    // // console.log(postList.length);
    // for (var i=0; i<postList.length; i++) {
    //   var contentList = $(postList[i]).find('.thumb_inner02').find('.thumbnail_table01').children('dd');
    //   // console.log(contentList);
    //   console.log(contentList.length);
    //   for (var j=0; j<contentList.length; j++) {
    //     var content = $(contentList[j]).text();
    //     // var content = "hello world";
    //
    //     console.log(content);
    //     buf = iconv.encode(content, 'utf-8');
    //     console.log(buf);
    //     str = iconv.decode(buf, 'utf-8');
    //     console.log(str);
    //
    //
    //     // var buf = new Buffer(content, 'binary');
    //     // console.log(iconv.convert(buf).toString());
    //     // console.log(content);
    //     // console.log('\n\n\n');
    //   }
    //   // console.log('hi');
    // }

});

//
// request({
//     url: 'http://www.lottemart.com/category/categoryList.do?CategoryID=C001001100010001',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
//     }
// }, function(err, res, html) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     var $ = cheerio.load(html);
//     var liList = $('#list_prod_1').children('ul').children('li');
//     for (var i = 0; i < liList.length; i++) {
//         // productId를 가져오기 위함.
//         var split = $(liList[i]).find('.pr_price .t_roman > span').attr('id').split('_');
//         console.log(split);
//         if (split.length < 2) {
//             continue;
//         }
//         var productId = split[1];
//         var price = $(liList[i]).find('#ItemCurrSalePrc_' + productId).text();
//         price = price.replace(/,/gi, "");
//         var title = $(liList[i]).find('#prodNm_' + productId).val();
//         console.log(productId + ':' + title + '(' + price + ')');
//     }
// });