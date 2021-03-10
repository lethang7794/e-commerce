const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'] },
    balance: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.plugin(require('./plugins/isDeletedFalse'));

const saltRounds = 10;
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.emailVerified;
  delete obj.emailVerificationCode;
  delete obj.isDeleted;
  return obj;
};

userSchema.methods.generateToken = async function () {
  const accessToken = await jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: '1d',
  });
  return accessToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
