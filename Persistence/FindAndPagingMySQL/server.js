const express = require('express');
const app = express();

const conn = require('./dbConnection.js');

app.get('/items', (req, res) => {
   // 페이지 번호. 기본 1
   const page = parseInt(req.query.page) || 1;
   // 페이지 당 항목 개수. 기본값 30
   const count = parseInt(req.query.count) || 30; // 기본 30개씩

   // 검색어
   const keyword = req.query.keyword;
   var where = '';
   if (keyword) {
      where += 'WHERE title LIKE "%' + keyword + '%"';
   }

   console.log('where : ', where);

   const countSql = 'SELECT count(*) as count FROM items ' + where;
   conn.query(countSql, (err, result) => {
      if (err) {
         return res.status(500).send({ msg: err.message });
      }

      // 전체 개수
      const totalCount = parseInt(result[0].count);
      // 전체 페이지
      const maxPage = Math.floor(totalCount / count);

      // Skip할 개수 계산. page는 1부터 시작
      const offset = count * (page - 1);

      const sql = 'SELECT title FROM items ' + where + ' LIMIT ? OFFSET ?';
      console.log(sql, count, offset);
      conn.query(sql, [count, offset], (err, results) => {
         if (err) {
            return res.status(500).send({ msg: err.message });
         }

         var data = {
            paging: {
               total: totalCount,
               maxPage : maxPage,
               page: page,
               count: count
            },
            data: results
         }

         res.send(data);
      });
   });
});

app.listen(3000);