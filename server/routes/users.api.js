const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/authentication');

/**
 * @route POST api/users/
 * @description User can register account
 * @access Public
 */
router.post('/', usersController.createUser);

/**
 * @route GET api/users/
 * @description Admin can get a list of all users
 * @access Admin
 */
router.get('/', usersController.getAllUsers);

/**
 * @route GET api/users/me
 * @description Info of current user
 * @access Login required
 */
router.get('/me', authMiddleware.loginRequired, usersController.getCurrentUser);

/**
 * @route POST api/users/:id
 * @description Admin can get info of an user
 * @access Admin
 */
router.get('/:id', usersController.getOneUser);

/**
 * @route POST api/users/:id
 * @description Admin can update an user
 * @access Admin
 */
router.put('/:id', usersController.updateUser);

/**
 * @route DELETE api/users/
 * @description Admin can delete an user
 * @access Admin
 */
router.delete('/:id', usersController.deleteUser);

/**
 * @route GET api/users/:id/orders
 * @description List of orders of current user
 * @access Login Required or Admin authorized
 */
router.get(
  '/:id/orders',
  authMiddleware.loginRequired,
  usersController.getOneUserOrders
);

/**
 * @route PUT api/users/:id/payment
 * @description User can make payment
 * @access Login required
 */
router.put(
  '/:id/payment',
  authMiddleware.loginRequired,
  usersController.makePaymentForAnOrder
);

/**
 * @route PUT api/user/:id/topup
 * @description Top-up user balance
 * @access Admin requied
 */
router.put(
  '/:id/topup',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  usersController.topup
);

module.exports = router;
