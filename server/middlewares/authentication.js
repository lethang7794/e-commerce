const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const User = require('../models/user');

const loginRequired = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString) return next(new Error('401 - Token required'));

    const token = tokenString.replace('Bearer ', '');

    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return next(new Error('401 - Token expired'));
        } else {
          return next(new Error('401 - Token invalid'));
        }
      }

      req.userId = payload._id;
    });
    next();
  } catch (error) {
    next(error);
  }
};

const adminRequired = async (req, res, next) => {
  try {
    const userId = req.userId;
    const currentUser = await User.findById(userId);

    const isAdmin = currentUser.role === 'admin';
    if (!isAdmin) return next(new Error('401 - Admin required'));

    req.isAdmin = isAdmin;
    next();
  } catch (error) {
    next(error);
  }
};

const authMiddleware = {
  loginRequired,
  adminRequired,
};

module.exports = authMiddleware;
