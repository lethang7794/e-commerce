const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const { sendResponse } = require('../helpers/utils.helper');

const validate = (validationArray) => async (req, res, next) => {
  await Promise.all(validationArray.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors = [];
  errors
    .array()
    .map((error) => extractedErrors.push({ [error.param]: error.msg }));
  return sendResponse(
    res,
    422,
    false,
    null,
    extractedErrors,
    'Validation Error: Missing requirements'
  );
};

const checkObjectId = (paramId) => {
  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    throw new Error('Invalid ObjectId: Object id is not a mongodb Id');
  }
  return true;
};

const validators = {
  validate,
  checkObjectId,
};

module.exports = validators;
