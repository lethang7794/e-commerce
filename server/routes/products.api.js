const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');
const authMiddleware = require('../middlewares/authentication');

/**
 * @route POST api/products/
 * @description Admin can add product
 * @access Admin Required
 */
router.post(
  '/',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productsController.createProduct
);

/**
 * @route GET api/products?page=1&limit=10
 * @description User can see list of all products
 * @access Public
 */
router.get('/', productsController.getAllProducts);

/**
 * @route GET api/products/:id
 * @description User can see product detail
 * @access Public
 */
router.get('/:id', productsController.getOneProduct);

/**
 * @route PUT api/products/:id/
 * @description Admin can update product
 * @access Admin required
 */
router.put(
  '/:id',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productsController.updateProduct
);

/**
 * @route DELETE api/products/:id
 * @description Admin can delete a product
 * @access Admin required
 */
router.delete(
  '/:id',
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productsController.deleteProduct
);

module.exports = router;
