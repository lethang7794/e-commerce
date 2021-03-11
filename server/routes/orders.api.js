const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders.controller');
const authMiddleware = require('../middlewares/authentication');

/**
 * @route POST api/orders/
 * @description User can create order
 * @access Login require
 */
router.post('/', authMiddleware.loginRequired, ordersController.createOrder);

/**
 * @route GET api/orders/
 * @description Admin can see all order
 * @access Admin required
 */
router.get(
  '/',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  ordersController.getAllOrders
);

/**
 * @route GET api/orders/me
 * @description User can see a list of their orders
 * @access Login required
 */
router.get('/me', authMiddleware.loginRequired, ordersController.getAllOrders);

/**
 * @route GET api/orders/:id
 * @description User can see order detail
 * @access Login required
 */
router.get('/:id', authMiddleware.loginRequired, ordersController.getOneOrder);

/**
 * @route PUT api/orders/:id
 * @description User can update order
 * @access Login require
 */
router.put(':id', authMiddleware.loginRequired, ordersController.updateOrder);

/**
 * @route DELETE api/orders/:id
 * @description Admin can delete order
 * @access Admin required
 */
router.delete(
  '/:id',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  ordersController.deleteOrder
);

module.exports = router;
