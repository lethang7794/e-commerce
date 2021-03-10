var express = require('express');
var router = express.Router();

const usersRouter = require('./users');

router.use('/users', usersRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('E-commerce backend');
});

/* Catch all unmatched routes */
router.use(function (req, res, next) {
  const err = new Error('404 - Resource not found');
  next(err);
});

module.exports = router;
