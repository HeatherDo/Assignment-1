var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var IntoxicationDeaths = mongoose.model('IntoxicationDeaths');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get number of deaths related to drugs/alcohol 
router.get('/IntoxicationDeaths', function(req, res, next) {
  IntoxicationDeaths.find(function(err, IntoxicationDeaths){
    if(err){ return next(err); }

    res.json(IntoxicationDeaths);
  });
});

module.exports = router;
