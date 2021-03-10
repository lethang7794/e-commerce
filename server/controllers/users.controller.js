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

const usersController = {
  createUser,
};

module.exports = usersController;
