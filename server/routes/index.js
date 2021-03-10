var express = require('express');
var router = express.Router();

const authRouter = require('./auth.api');

const usersRouter = require('./users.api');
const productsRouter = require('./products.api');
const ordersRouter = require('./orders.api');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('E-commerce backend');
});

// Authorization Router
router.use('/auth', authRouter);

// Users Router
router.use('/users', usersRouter);

// Products Router
router.use('/products', productsRouter);

// Orders Router
router.use('/orders', ordersRouter);

/* Catch all unmatched routes */
router.use(function (req, res, next) {
  const err = new Error('404 - Resource not found');
  next(err);
});

module.exports = router;
