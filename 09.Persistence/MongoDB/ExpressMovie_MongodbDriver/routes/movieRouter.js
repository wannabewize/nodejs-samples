const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'uploads/'})

const movieController = require('../controllers/movieController');

router.get('/', movieController.showMovieList);

router.get('/movies', movieController.showMovieList);

router.get('/newMovie', movieController.sendNewMovieForm);

router.post('/movies', upload.single('poster'), movieController.addMovie);

router.get('/movies/:movieId', movieController.showMovieDetail);

router.get('/movies/:movieId/comments', movieController.getComments);

router.post('/movies/:movieId', movieController.addComment);

module.exports = router;




