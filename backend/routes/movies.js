var express = require('express');
var movies = require('../movies.json');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('movies router invoked')
  res.send(movies)
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var movie = movies.filter(function (movie) {
    return movie.id === id
  });

  res.send(movie)
});

module.exports = router;
