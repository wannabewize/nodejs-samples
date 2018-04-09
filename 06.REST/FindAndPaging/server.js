/**
 * 페이지네이션과 검색
 */

const express = require('express');
const app = express();

const data = [];
// 초기 데이터 입력
for(var i = 0 ; i < 100 ; i++) {
   const item = 'item-' + i;
   data.push(item);
};

// /items?page=p&count=c&keyword=k
app.get('/items', showItems);

// /articles?skip=s&count=c&keyword=k
app.get('/articles', showArticles);

app.listen(3000, err => {
   if ( err ) {
      console.log('Error :', err);
      return;
   }
   console.log('Server is running @ 3000');
});

function showItems(req, res) {
   // 페이지 번호. 기본 1
   const page = parseInt(req.query.page) || 1;
   // 페이지 당 항목 개수. 기본값 30
   const count = parseInt(req.query.count) || 10; // 기본 10개씩
   // 검색어
   const keyword = req.query.keyword;

   console.log('page :', page, 'count :', count, 'keyword :', keyword);

   // 검색 결과
   var filtered; 
   if ( keyword ) {
      // 검색어가 있으면, 검색어로 필터링 된 배열 생성
      filtered = data.filter( item => {
         return item.indexOf(keyword) > -1;
      });
   }
   else {
      // 검색어가 없으면 전체 배열을 이용해서 페이지네이션
      filtered = data;
   }

   console.log('filtered :', filtered, filtered.length);

   // 전체 데이터 갯수가 넘지 않는 범위
   const start = Math.min( ( (page-1) * count) , filtered.length - 1 );
   const end = Math.min( (page) * count, filtered.length - 1 );

   console.log('start :', start, 'end :', end);

   const results = [];
   for(var i = start; i < end; i++) {
      results.push( filtered[i] );
   }

   // 전체 페이지 수
   const max = Math.ceil(filtered.length / count);

   const ret = {
      paging : {
         count : count,
         page : page,
         max : max
      },
      count : results.length,
      data : results
   }

   res.send(ret);
}

function showArticles(req, res) {
   // 페이지 번호. 기본 1
   const skip = parseInt(req.query.skip) || 0;
   // 페이지 당 항목 개수. 기본값 30
   const count = parseInt(req.query.count) || 10; // 기본 10개씩
   // 검색어
   const keyword = req.query.keyword;

   // 검색 결과
   var filtered; 
   if ( keyword ) {
      // 검색어가 있으면, 검색어로 필터링 된 배열 생성
      filtered = data.filter( item => {
         return item.indexOf(keyword) > -1;
      });
   }
   else {
      // 검색어가 없으면 전체 배열을 이용해서 페이지네이션
      filtered = data;
   }

   // 전체 데이터 갯수가 넘지 않는 범위
   const start = Math.min( skip , filtered.length - 1 );
   const end = Math.min( skip + count, filtered.length - 1 );

   console.log('start :', start, 'end :', end);

   const results = [];
   for(var i = start; i < end; i++) {
      results.push( filtered[i] );
   }

   var prev = (skip-count) >= 0 ? 'skip=' + (skip - count) + '&count=' + count : 'skip=0&count=' + count;
   var next = (skip+count) < filtered.length ? 'skip=' + (skip + count) + '&count=' + count : null;
   if ( keyword ) {
      prev += '&keyword=' + keyword;
      if ( next )
         next += '&keyword=' + keyword;      
   }

   const ret = {
      paging : {
         prev : prev,
         next : next         
      },
      total : filtered.length,
      count : results.length,
      data : results
   }

   res.send(ret);   
}