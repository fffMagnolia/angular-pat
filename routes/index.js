var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express'});
  //console.log('root access!!');
  res.sendFile(path.join(__dirname + '../dist/front/index.html'));
});

module.exports = router;
