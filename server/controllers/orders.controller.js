const { sendResponse } = require('../helpers/utils.helper');
const Order = require('../models/order');

// Create a new order
const createOrder = async (req, res, next) => {
  try {
    const { userId, products } = req.body;

    const order = await Order.create({
      userId,
      products,
    });

    sendResponse(res, 200, true, { order }, null, 'Order created');
  } catch (error) {
    next(error);
  }
};

// Get all orders with filter and query
const getAllOrders = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalOrders = await Order.count({ ...filter, isDeleted: false });

    const totalPages = Math.ceil(totalOrders / limit);
    const offset = limit * (page - 1);

    const orders = await Order.find({}).skip(offset).limit(limit);

    sendResponse(
      res,
      200,
      true,
      { orders, totalPages },
      null,
      'Get all order successfully'
    );
  } catch (error) {
    next(error);
  }
};

// Get own orders
const getOwnOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.userId,
    }).populate('products', '-_id -__v');

    sendResponse(
      res,
      200,
      true,
      { orders },
      null,
      `${orders.length} orders found`
    );
  } catch (err) {
    next(err);
  }
};

// Get a order
const getOneOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    let order = await Order.findById(id);

    if (!order) return next(new Error('404 - Order not found'));
    order = await Order.findById(id);

    sendResponse(
      res,
      200,
      true,
      { order },
      null,
      'Get detail of single order success'
    );
  } catch (error) {
    next(error);
  }
};

// Update a order
const updateOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { userId, products } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { userId, products },
      { new: true }
    );

    if (!order) {
      return next(new Error('Order not found or User not authorized'));
    }

    sendResponse(res, 200, true, { order }, null, 'Order updated');
  } catch (error) {
    next(error);
  }
};

// Delete a order
const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Order.findByIdAndDelete(id, function (err, deletedOrder) {
      if (err) {
        return next(new Error('Order not found or User not authorized'));
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

const ordersController = {
  createOrder,
  getAllOrders,
  getOwnOrders,
  getOneOrder,
  updateOrder,
  deleteOrder,
};

module.exports = ordersController;
