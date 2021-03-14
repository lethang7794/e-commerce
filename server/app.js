var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');

const utilsHelper = require('./helpers/utils.helper');
const { errorHandler } = require('./middlewares/error-handler');

// Set up mongoose connection
var mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, // Make Mongoose the MongoDB driver's findOneAndUpdate() function instead of findAndModify().
  })
  .then(() => {
    console.log(`Mongoose connected to ${MONGODB_URI}!`);
  })
  .catch((err) =>
    console.error('Mongoose could not connect to database!', err)
  );
var db = mongoose.connection;

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use(errorHandler);

module.exports = app;
