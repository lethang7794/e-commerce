const bcrypt = require('bcrypt');
const { sendResponse } = require('../helpers/utils.helper');
const User = require('../models/user');

const loginWithEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return next(new Error('401 - Email not exists'));

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return next(new Error('401 - Wrong password'));

    const accessToken = await user.generateToken();
    sendResponse(res, 200, true, { user, accessToken }, null, 'Login success');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginWithEmail,
};
