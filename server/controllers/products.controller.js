const { sendResponse } = require('../helpers/utils.helper');
const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, images } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      images,
    });

    sendResponse(res, 200, true, { product }, null, 'product created');
  } catch (error) {
    next(error);
  }
};

// Get all products with filter and query
const getAllProducts = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalProducts = await Product.count({ ...filter, isDeleted: false });

    const totalPages = Math.ceil(totalProducts / limit);
    const offset = limit * (page - 1);

    const products = await Product.find({}).skip(offset).limit(limit);

    sendResponse(
      res,
      200,
      true,
      { products, totalPages },
      null,
      'Get all product Success'
    );
  } catch (error) {
    next(error);
  }
};

// Get a product
const getOneProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    let product = await Product.findById(id);
    if (!product) return next(new Error('404 - Product not found'));

    sendResponse(
      res,
      200,
      true,
      { product },
      null,
      'Get detail of single product success'
    );
  } catch (error) {
    next(error);
  }
};

// Update a product
const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, price, images } = req.body;

    const product = await Product.findOneAndUpdate(
      id,
      { name, description, price, images },
      { new: true }
    );
    if (!product) {
      return next(new Error('Product not found or User not authorized'));
    }

    sendResponse(res, 200, true, { product }, null, 'Product updated');
  } catch (error) {
    next(error);
  }
};

// Delete a product
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Product.findByIdAndDelete(id, function (err, deletedProduct) {
      if (err) {
        return next(new Error('Product not found or User not authorized'));
      }

      // https://expressjs.com/en/api.html#res.status
      // The 204 and 304 responses must not include a message body. (https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)
      // 204 No Content
      sendResponse(res, 204, true, null, null, null);
    });
  } catch (err) {
    next(err);
  }
};

const productsController = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productsController;
