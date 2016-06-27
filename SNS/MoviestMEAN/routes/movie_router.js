var express = require('express');
var Movie = require('../model/movieModel');

// 라우터 얻기
var router=express.Router();

router.route('/movies')
    .get(showMovieList)
    .post(addMovie);

router.route('/movies/:id')
    .get(showMovieDetail)
    .delete(deleteMovie)
    .put(editMovie);


function showMovieList(req, res) {
    Movie.find({}, {_id:1, title:1}, function(err, docs) {
        if ( err ) {
            res.status(500).send({msg:'db error'});
            return;
        }
        console.log(docs);
        var result = {
            count : docs.length,
            data : docs
        };
        res.send(result);
    });
}

function showMovieDetail(req, res) {
    var id = req.params.id;
    console.log('movie detail id : ', id);
    Movie.findOne({_id:id}, function(err, doc) {
        if ( err ) {
            res.status(500).send({msg:'db error'});
            return;
        }

        console.log('detail : ', doc);
        res.send(doc);
    });
}

function addMovie(req, res) {
    // json 으로 전달
    var movie = req.body;

    // userId
    //var id = req.user.id;
    console.log('user id : ', req.user);

    Movie.create(movie, function(err, doc) {
        if ( err ) {
            res.status(500).send({msg:'db error'});
            return;
        }
        else {
            res.send({msg:'success', data:doc});
        }
    });
}

function deleteMovie(req, res) {
    // TODO : 영화 삭제
}

// 영화 수정
function editMovie(req, res) {
    // TODO
}

module.exports = router;
/**
 * Created by wannabewize on 2016. 6. 26..
 */
