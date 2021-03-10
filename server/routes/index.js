var express = require('express');
var router = express.Router();

const usersRouter = require('./users');

router.use('/users', usersRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('E-commerce backend');
});

module.exports = router;
