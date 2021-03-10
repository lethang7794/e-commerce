function errorHandler(err, req, res, next) {
  console.log('ERROR: ', err);

  // Custom-made error
  const statusCode = err.message.split(' - ')[0];
  const message = err.message.split(' - ')[1];
  if (!isNaN(statusCode)) {
    return res.status(statusCode).json({
      success: false,
      error: message,
    });
  }

  // Bad JSON - https://github.com/expressjs/body-parser/issues/122
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      error: 'Bad JSON',
    });
  }

  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
  });
}

module.exports = { errorHandler };
