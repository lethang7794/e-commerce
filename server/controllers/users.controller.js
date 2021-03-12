const { sendResponse } = require('../helpers/utils.helper');
const User = require('../models/user');

const createUser = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    let user = await User.findOne({ email: email });
    if (user) return next(new Error('401 - Email already exists'));

    user = await User.create({ name, email, password });

    sendResponse(res, 200, true, { user }, null, 'Created account');
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalUsers = await User.count({ ...filter, isDeleted: false });

    const totalPages = Math.ceil(totalUsers / limit);
    const offset = limit * (page - 1);

    const users = await User.find({}).skip(offset).limit(limit);

    sendResponse(
      res,
      200,
      true,
      { users, totalPages },
      null,
      `${totalUsers} users found`
    );
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    let user = await User.findById(id);
    if (!user) return next(new Error('404 - User not found'));

    sendResponse(res, 200, true, { user }, null, `User ${user.id} found`);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { email, password, name } = req.body;
    const updateParams = {
      ...(email && { email }),
      ...(name && { name }),
    };

    // Check for duplicated email
    let user = await User.findOne({ email: email });
    if (user) return next(new Error('401 - Email already exists'));

    await User.findByIdAndUpdate(
      id,
      updateParams,
      { new: true },
      function (err, user) {
        // Use a callback to change the password or save middleware for hashing the password won't work
        if (err) {
          return next(err);
        }

        if (password) {
          user.password = password;
        }
        user.save(function (err, user) {
          if (err) {
            return next(err);
          }

          sendResponse(
            res,
            200,
            true,
            { user },
            null,
            `User ${user.id} updated`
          );
        });
      }
    );
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOneAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!user) {
      return next(new Error('404 - User not found'));
    }

    sendResponse(res, 204, true, null, null, null);
  } catch (err) {
    next(err);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return sendResponse(res, 400, false, null, null, 'User not found');
    }

    sendResponse(res, 200, true, { user }, null, `User ${user.id} found`);
  } catch (err) {
    next(err);
  }
};

const getOneUserOrders = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalOrders = await Order.count({ ...filter, isDeleted: false });

    const totalPages = Math.ceil(totalOrders / limit);
    const offset = limit * (page - 1);

    const currentUserId = req.userId;
    const currentUser = await User.findById(currentUserId);

    const userId = req.params.id;

    // Current User request other Order
    if (userId !== currentUserId && currentUser.role !== 'admin') {
      return next(
        new Error('401 - Only admin is able to check other user Order detail')
      );
    }
    // current user request its Order or Admin request user's order
    const orders = await Order.find({ userId })
      .sort({ ...sortBy, createdAt: -1 })
      .skip(offset)
      .limit(limit);
    // in case no order
    if (!orders) return next(new Error(`401 - ${userId} has no order`));

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { orders, totalPages },
      null,
      `${totalOrders} orders from ${userId} found`
    );
  } catch (error) {
    next(error);
  }
};

const makePaymentForAnOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const currentUserId = req.userId;

    let order = await Order.findById(orderId);
    const currentUser = await User.findById(currentUserId);

    const total = order.total;
    const funds = currentUser.balance;

    if (total > funds) return next(new Error('403 - Insufficient balance'));

    user = await User.findByIdAndUpdate(
      currentUserId,
      { balance: funds - total },
      { new: true }
    );

    order = await Order.findByIdAndUpdate(
      orderId,
      { status: 'paid' },
      { new: true }
    );
  } catch (error) {
    next(error);
  }
};

const topup = async (req, res, next) => {};

const usersController = {
  // RESTFUL
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  // EXTRA
  getCurrentUser,
  getOneUserOrders,
  makePaymentForAnOrder,
  topup,
};

module.exports = usersController;
